-- Create a new table
CREATE TABLE universities (
    id SERIAL PRIMARY KEY,
    state_province VARCHAR(100),
    alpha_two_code CHAR(2),
    country VARCHAR(100),
    continent VARCHAR(100),
    popular_major VARCHAR(100),
    name VARCHAR(200),
    web_page VARCHAR(200),
    domain VARCHAR(100)
);

-- Insert data into the new table
INSERT INTO universities (state_province, alpha_two_code, country, continent, popular_major, name, web_page, domain)
VALUES (
    'Abu Dhabi',
    'AE',
    'United Arab Emirates',
    'Asia',
    'Engineering',
    'Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)',
    'https://mbzuai.ac.ae/',
    'mbzuai.ac.ae'
),
(
    NULL,
    'BR',
    'Brazil',
    'America',
    'Business',
    'Centro Universiti Rio de Brasilia, UNICEUB',
    'https://www.uniceub.br/',
    'uniceub.br'
),
(
    NULL,
    'UA',
    'Ukraine',
    'Europe',
    'Engineering',
    'Kharkiv National University',
    'https://karazin.ua/',
    'student.karazin.ua'
),
(
    NULL,
    'UA',
    'Ukraine',
    'Europe',
    'Engineering',
    'Kharkiv National University',
    'https://karazin.ua/',
    'karazin.ua'
),
(
    NULL,
    'CL',
    'Chile',
    'America',
    'Engineering',
    'Universidad Ticnica Federico Santa Marida',
    'https://usm.cl/',
    'usm.cl'
),
(
    NULL,
    'FR',
    'France',
    'Europe',
    'Business',
    'IESEG School of Management',
    'https://ieseg.fr/',
    'ieseg.fr'
), (
    NULL,
    'CN',
    'China',
    'Asia',
    'Literature',
    'Sun Yat-Sen University',
    'https://sysu.edu.cn/',
    'mail2.sysu.edu.cn'
),
(
    NULL,
    'CN',
    'China',
    'Asia',
    'Literature',
    'Sun Yat-Sen University',
    'https://sysu.edu.cn/',
    'mail.sysu.edu.cn'
),
(
    NULL,
    'GB',
    'United Kingdom',
    'Europe',
    'Literature',
    'Royal Holloway University of London',
    'https://rhul.ac.uk/',
    'rhul.ac.uk'
),
(
    NULL,
    'CN',
    'China',
    'Asia',
    'Business',
    'Hunan University',
    'https://www.hnu.edu.cn/',
    'hnu.edu.cn'
),
(
    NULL,
    'CN',
    'China',
    'Asia',
    'Business',
    'Hunan University',
    'http://www-en.hnu.edu.cn/',
    'www-en.hnu.edu.cn'
),
(
    NULL,
    'GB',
    'United Kingdom',
    'Europe',
    'Engineering',
    'University of Portsmouth',
    'https://myport.port.ac.uk/',
    'myport.ac.uk'
),
(
    NULL,
    'GB',
    'United Kingdom',
    'Europe',
    'Engineering',
    'University of Portsmouth',
    'https://myport.port.ac.uk/',
    'myport.port.ac.uk'
),
(
    NULL,
    'FR',
    'France',
    'Europe',
    'Business',
    'Academie de Paris',
    'https://www.ac-paris.fr/',
    'ac-paris.fr'
),
(
    NULL,
    'FR',
    'France',
    'Europe',
    'Engineering',
    'Academie d''Aix-Marseille',
    'https://www.ac-aix-marseille.fr/',
    'ac-aix-marseille.fr'
),
(
    NULL,
    'FR',
    'France',
    'Europe',
    'Literature',
    'Academie de Creteil',
    'https://www.ac-creteil.fr/',
    'ac-creteil.fr'
),
(
    NULL,
    'US',
    'United States',
    'America',
    'Law',
    'Marywood University',
    'http://www.marywood.edu/',
    'marywood.edu'
),
(
    'Dehradun',
    'IN',
    'India',
    'Asia',
    'Engineering',
    'University of Petroleum and Energy Studies',
    'https://www.upes.ac.in/',
    'upes.ac.in'
),
(
    'Quebec',
    'CA',
    'Canada',
    'America',
    'Law',
    'Cegep de Saint-Jerome',
    'https://www.cstj.qc.ca/',
    'cstj.qc.ca'
),
(
    'Quebec',
    'CA',
    'Canada',
    'America',
    'Law',
    'Cegep de Saint-Jerome',
    'https://ccmt.cstj.qc.ca/',
    'cstj.qc.ca'
),
(
    'Quebec',
    'CA',
    'Canada',
    'America',
    'Law',
    'Cegep de Saint-Jerome',
    'https://ccml.cstj.qc.ca/',
    'cstj.qc.ca'
), (
    NULL,
    'US',
    'United States',
    'America',
    'Business',
    'Lindenwood University',
    'http://www.lindenwood.edu/',
    'lindenwood.edu'
),
(
    'Punjab',
    'IN',
    'India',
    'Asia',
    'Engineering',
    'DAV Institute of Engineering & Technology',
    'http://www.davietjal.org/',
    'davietjal.org'
),
(
    'Punjab',
    'IN',
    'India',
    'Asia',
    'Literature',
    'Lovely Professional University',
    'http://www.lpu.in/',
    'lpu.in'
),
(
    NULL,
    'US',
    'United States',
    'America',
    'Business',
    'Sullivan University',
    'https://sullivan.edu/',
    'sullivan.edu'
),
(
    NULL,
    'US',
    'United States',
    'America',
    'Law',
    'Florida State College at Jacksonville',
    'https://www.fscj.edu/',
    'fscj.edu'
),
(
    NULL,
    'US',
    'United States',
    'America',
    'Engineering',
    'Xavier University',
    'https://www.xavier.edu/',
    'xavier.edu'
),
(
    NULL,
    'US',
    'United States',
    'America',
    'Business',
    'Tusculum College',
    'https://home.tusculum.edu/',
    'tusculum.edu'
),
(
    NULL,
    'US',
    'United States',
    'America',
    'Literature',
    'Claremont School of Theology',
    'https://cst.edu/',
    'cst.edu'
),
(
    NULL,
    'IN',
    'India',
    'Asia',
    'Business',
    'Somaiya Vidyavihar',
    'https://somaiya.edu/',
    'somaiya.edu'
),
(
    NULL,
    'US',
    'United States',
    'America',
    'Literature',
    'University of Arkansas - Fort Smith',
    'http://www.uafs.edu/',
    'uafs.edu'
),
(
    NULL,
    'US',
    'United States',
    'America',
    'Science',
    'University of Arkansas for Medical Sciences',
    'http://www.uams.edu/',
    'uams.edu'
),
(
    NULL,
    'AF',
    'Afghanistan',
    'Asia',
    'Science',
    'Dawat University',
    'http://www.dawat.edu.af/',
    'dawat.edu.af'
),
(
    NULL,
    'AF',
    'Afghanistan',
    'Asia',
    'Business',
    'Dunya Institute of Higher Education',
    'http://www.dunya.edu.af/',
    'dunya.edu.af'
),
(
    NULL,
    'DZ',
    'Algeria',
    'Africa',
    'Engineering',
    'Universiti Kasdi Merbah Ouargla',
    'http://www.univ-ouargla.dz/',
    'univ-ouargla.dz'
),
(
    NULL,
    'DZ',
    'Algeria',
    'Africa',
    'Law',
    'Universiti de Saida',
    'http://www.univ-saida.dz/',
    'univ-saida.dz'
),
(
    NULL,
    'AR',
    'Argentina',
    'America',
    'Science',
    'Universidad de Bologna - Representacion en Buenos Aires',
    'http://www.unibo.edu.ar/',
    'unibo.edu.ar'
),
(
    'New South Wales',
    'AU',
    'Australia',
    'Australia',
    'Engineering',
    'Avondale University',
    'http://www.avondale.edu.au/',
    'avondale.edu.au'
),
(
    'Victoria',
    'AU',
    'Australia',
    'Australia',
    'Business',
    'Federation University Australia',
    'http://federation.edu.au/',
    'federation.edu.au'
),
(
    'Ontario',
    'CA',
    'Canada',
    'America',
    'Law',
    'George Brown College',
    'http://www.gbrownc.on.ca/',
    'gbrownc.on.ca'
);