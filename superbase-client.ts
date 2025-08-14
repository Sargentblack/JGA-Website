import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gkylzafikelokhsefayx.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdreWx6YWZpa2Vsb2toc2VmYXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5MDU4ODgsImV4cCI6MjA3MDQ4MTg4OH0.VK6AP-U6a-qFdDqsWM445L6NG39XlZlDlfIdQlZndg0")