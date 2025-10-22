// server.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import db from './utils/database.js';

const app = express();

// CORS（目前全開，若要安全可改白名單）
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 健康檢查
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/blog_83', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM blog_83');
    res.json(results.rows);
  } catch (err) {
    console.error('Database query error:', err.message);
    res.status(500).send('Database query error');
  }
});

const PORT = process.env.PORT || 3001;

async function start() {
  try {
    if (!db || !db.query) throw new Error('Database pool is undefined');

    // 啟動前試連線
    await db.query('SELECT 1');
    console.log('✅ Database connection is healthy');

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err.message);
    process.exit(1);
  }
}

start();