import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;
    const { error } = await supabase
      .from('requests')
      .insert([{ name, email, phone, message }]);
    if (error) return res.status(500).json({ error: 'Ошибка при сохранении заявки.' });
    return res.status(201).json({ message: 'Заявка успешно отправлена!' });
  }
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('requests')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: 'Ошибка при получении заявок.' });
    return res.status(200).json(data);
  }
  res.status(405).json({ error: 'Метод не поддерживается.' });
}
