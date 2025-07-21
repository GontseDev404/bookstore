alter table profiles
add column if not exists first_name text,
add column if not exists last_name text,
add column if not exists phone text,
add column if not exists email text,
add column if not exists email_notifications boolean default true,
add column if not exists order_updates boolean default true,
add column if not exists promotional_emails boolean default false,
add column if not exists newsletter boolean default true,
add column if not exists two_factor_auth boolean default false,
add column if not exists public_profile boolean default false,
add column if not exists dark_mode boolean default false,
add column if not exists language text default 'English';