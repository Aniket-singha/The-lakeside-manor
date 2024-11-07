import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ygqfiueebxkzpnnmcsiq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncWZpdWVlYnhrenBubm1jc2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMDU0NzQsImV4cCI6MjAyODc4MTQ3NH0.94wEWHioEnrxpLshiRksoyz70gQk4b_M-ixD_as9wm8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase