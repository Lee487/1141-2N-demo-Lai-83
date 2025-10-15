
import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

let pool;

// 你的原始設計：DATABASE_URL 表示模式（Local / SUPABASE / 也可直接放 postgres://...）
// 這裡也容錯支援 DATABASE（你曾用過）。
const mode = process.env.DATABASE_URL || process.env.DATABASE;

// 小工具：遮罩密碼（只顯示最後 4 碼）
const mask = (s) => (s ? s.replace(/.(?=.{4})/g, '*') : s);

if (mode === 'Local' || !mode) {
  // 本地模式（若沒設值，預設 Local）
  const cfg = {
    user: process.env.PGUSER || 'leep',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'wp1_demo_83',
    password: process.env.PGPASSWORD || '0000',
    port: parseInt(process.env.PGPORT || '5432', 10),
  };
  console.log('🔧 DB mode: Local', { ...cfg, password: mask(cfg.password) });

  pool = new Pool(cfg);
  console.log('✅ Connected to local database');
} else if (mode === 'SUPABASE') {
  // Supabase 模式（通常需要 SSL）
  // 你之前貼過 SUPABASE_DB、SUPABASE_Password（大小寫混用），這裡一併相容。
  const host = process.env.SUPABASE_HOST;
  const user = process.env.SUPABASE_USER;
  const database = process.env.SUPABASE_DATABASE || process.env.SUPABASE_DB;
  const password = process.env.SUPABASE_PASSWORD || process.env.SUPABASE_Password;
  const port = parseInt(process.env.SUPABASE_PORT || '5432', 10);

  if (!host || !user || !database || !password) {
    console.error('❌ Supabase 環境變數缺失，請設定 SUPABASE_HOST / SUPABASE_USER / SUPABASE_DATABASE(或 SUPABASE_DB) / SUPABASE_PASSWORD(或 SUPABASE_Password)');
  } else {
    const cfg = {
      host,
      user,
      database,
      password,
      port,
      ssl: { rejectUnauthorized: false }, // Supabase 常見需求
    };
    console.log('🔧 DB mode: SUPABASE', { ...cfg, password: mask(cfg.password) });

    pool = new Pool(cfg);
    console.log('✅ Connected to Supabase database');
  }
} else if ((process.env.DATABASE_URL || '').startsWith('postgres://')) {
  // 直接 connectionString
  const cfg = {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : undefined,
  };
  console.log('🔧 DB mode: connectionString', { ...cfg, connectionString: '[redacted]' });

  pool = new Pool(cfg);
  console.log('✅ Connected via connectionString');
} else {
  console.error('❌ DATABASE_URL / DATABASE 必須為 Local / SUPABASE / postgres://... 之一');
}

if (pool) {
  pool.on('error', (err) => {
    console.error('Unexpected DB error:', err);
  });
}

export default {
  query: (text, params) => {
    if (!pool) throw new Error('Database pool not initialized');
    return pool.query(text, params);
  },
  pool,
};