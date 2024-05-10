const whitelist: string[] = ['http://localhost:3000', 'http://localhost:8080'];

export const corsOptions = {
  origin(origin: any, callback: any) {
    if (whitelist.includes(origin) || origin === undefined) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
