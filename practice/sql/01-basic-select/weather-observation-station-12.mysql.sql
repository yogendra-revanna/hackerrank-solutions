-- https://www.hackerrank.com/challenges/weather-observation-station-12/problem
-- Weather Observation Station 12

select distinct city 
from station
where 
    city not like '%a' and city not like '%e' and city not like '%i' and city not like '%o' and  city not like '%u'and 
    city not like 'a%' and city not like 'e%' and city not like 'i%' and city not like 'o%' and  city not like 'u%'