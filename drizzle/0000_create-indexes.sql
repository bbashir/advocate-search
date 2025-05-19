-- Add indexes for all columns except id (which is already indexed as primary key)
CREATE INDEX IF NOT EXISTS advocates_first_name_idx ON advocates(first_name);
CREATE INDEX IF NOT EXISTS advocates_last_name_idx ON advocates(last_name);
CREATE INDEX IF NOT EXISTS advocates_city_idx ON advocates(city);
CREATE INDEX IF NOT EXISTS advocates_degree_idx ON advocates(degree);
CREATE INDEX IF NOT EXISTS advocates_years_of_experience_idx ON advocates(years_of_experience);
CREATE INDEX IF NOT EXISTS advocates_phone_number_idx ON advocates(phone_number);
CREATE INDEX IF NOT EXISTS advocates_created_at_idx ON advocates(created_at);

-- Create a GIN index for the specialties JSONB array to enable efficient searching
CREATE INDEX IF NOT EXISTS advocates_specialties_gin_idx ON advocates USING GIN (specialties);
