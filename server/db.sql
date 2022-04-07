--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6
-- Dumped by pg_dump version 13.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE blog_project;
--
-- Name: blog_project; Type: DATABASE; Schema: -; Owner: mttparry
--

CREATE DATABASE blog_project WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE blog_project OWNER TO mttparry;

\connect blog_project

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(255),
    comic_name character varying(255),
    comic_url character varying(3000),
    blog_content character varying(8000),
    top_image character varying(3000),
    mid_image character varying(3000),
    genre character varying(255),
    rating integer,
    creationtimestamp timestamp without time zone
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: subscribers; Type: TABLE; Schema: public; Owner: mttparry
--

CREATE TABLE public.subscribers (
    id integer NOT NULL,
    name text,
    email text
);


ALTER TABLE public.subscribers OWNER TO mttparry;

--
-- Name: subscribers_id_seq; Type: SEQUENCE; Schema: public; Owner: mttparry
--

ALTER TABLE public.subscribers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.subscribers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, title, comic_name, comic_url, blog_content, top_image, mid_image, genre, rating, creationtimestamp) FROM stdin;
3	Merfolk and Prophecies	Castle Swimmer by Wendy Lian Martin	https://www.webtoons.com/en/fantasy/castle-swimmer/episode-1/viewer?title_no=1499&episode_no=1	Pellentesque habitant morbi tristique senectus et netus et malesuada. Ut lectus arcu bibendum at. Eget gravida cum sociis natoque. Suspendisse interdum consectetur libero id. Id semper risus in hendrerit gravida rutrum. At imperdiet dui accumsan sit. Nibh tellus molestie nunc non. Quis commodo odio aenean sed adipiscing diam. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Id aliquet lectus proin nibh nisl condimentum. Nisi scelerisque eu ultrices vitae auctor eu augue. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Scelerisque fermentum dui faucibus in ornare quam viverra. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Tincidunt vitae semper quis lectus nulla at volutpat. Sit amet consectetur adipiscing elit pellentesque habitant. Proin sed libero enim sed faucibus turpis in eu. Vivamus at augue eget arcu dictum varius duis.	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598825111i/54951170._SS1079_.jpg	\N	Fantasy	9	2022-04-05 14:07:36.135409
7	test3	test	test	test	test	test	test	2	2022-04-05 15:41:13.705729
1	What do the gods do after dark?	Lore Olympus by Rachel Smythe	https://www.webtoons.com/en/romance/lore-olympus/episode-1/viewer?title_no=1320&episode_no=1	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec enim diam vulputate ut pharetra sit amet aliquam. Scelerisque in dictum non consectetur a. Enim nec dui nunc mattis enim ut. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Donec adipiscing tristique risus nec feugiat in fermentum. At erat pellentesque adipiscing commodo elit at. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Eget nullam non nisi est sit amet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.\n\nVarius vel pharetra vel turpis nunc eget lorem dolor sed. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Arcu dictum varius duis at consectetur lorem donec massa. Morbi tristique senectus et netus et malesuada fames ac. Odio ut sem nulla pharetra diam sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Eget dolor morbi non arcu risus quis. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Congue quisque egestas diam in. Curabitur vitae nunc sed velit dignissim. Suscipit adipiscing bibendum est ultricies integer. Etiam erat velit scelerisque in dictum.	https://static3.srcdn.com/wordpress/wp-content/uploads/2022/03/Lore-Olympus.jpg	\N	Romance	10	2022-04-05 14:03:31.404529
6	test2	test	test	test	data:image/png;base64,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	test	Fantasy	1	2022-04-05 15:21:25.425799
4	Nerdy Girl Masters Makeup	True Neauty by Yaongyi	https://www.webtoons.com/en/romance/truebeauty/episode-0-/viewer?title_no=1436&episode_no=1	A condimentum vitae sapien pellentesque habitant. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Vulputate ut pharetra sit amet aliquam id diam. Elit pellentesque habitant morbi tristique senectus et. Mattis pellentesque id nibh tortor id aliquet lectus proin. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Nibh tellus molestie nunc non blandit massa enim. In ornare quam viverra orci. Augue eget arcu dictum varius duis at consectetur. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Est sit amet facilisis magna. Ultrices sagittis orci a scelerisque purus semper eget. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Semper eget duis at tellus at urna condimentum mattis. Dolor sit amet consectetur adipiscing elit. Ornare arcu odio ut sem nulla pharetra diam sit. Non arcu risus quis varius quam quisque id diam.\n\nTincidunt ornare massa eget egestas purus viverra accumsan. Facilisi etiam dignissim diam quis. Urna neque viverra justo nec ultrices dui sapien eget mi. Arcu bibendum at varius vel pharetra vel turpis nunc. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Cras semper auctor neque vitae tempus. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Lacinia quis vel eros donec ac odio tempor orci dapibus. Netus et malesuada fames ac turpis egestas sed. In fermentum posuere urna nec tincidunt praesent. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Ipsum dolor sit amet consectetur. Purus faucibus ornare suspendisse sed nisi. Cras adipiscing enim eu turpis egestas.	https://upload.wikimedia.org/wikipedia/en/2/22/Yaongyi_-_True_Beauty_vol._1_%282020%2C_Young_Com%29_book_cover.jpg	\N	Romance	7	2022-04-05 14:12:08.447691
2	Witches, Rituals, and Secrets	Muted by Miranda Mundt	https://www.webtoons.com/en/supernatural/muted/episode-1/viewer?title_no=1566&episode_no=1	Mollis nunc sed id semper risus. Tellus cras adipiscing enim eu turpis egestas pretium. Natoque penatibus et magnis dis. Quis imperdiet massa tincidunt nunc pulvinar. Tellus integer feugiat scelerisque varius morbi enim nunc. Orci a scelerisque purus semper eget duis at tellus. Nunc sed velit dignissim sodales ut eu sem integer. Pellentesque habitant morbi tristique senectus et netus et malesuada. Morbi tristique senectus et netus et. Et netus et malesuada fames ac turpis egestas sed tempus. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Ultricies integer quis auctor elit sed vulputate mi sit. Odio aenean sed adipiscing diam. Et tortor at risus viverra adipiscing at in tellus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Viverra vitae congue eu consequat ac felis donec. Tellus molestie nunc non blandit massa. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Vel quam elementum pulvinar etiam non. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque.\n\nQuis imperdiet massa tincidunt nunc. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Id leo in vitae turpis. Posuere urna nec tincidunt praesent semper. Nullam non nisi est sit amet facilisis magna etiam tempor. Tellus molestie nunc non blandit massa enim. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Justo nec ultrices dui sapien eget mi proin sed libero. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Tempus imperdiet nulla malesuada pellentesque elit eget.	https://64.media.tumblr.com/681fa136ba5e6360c94bb0e37ce25ab1/37844526205a6c88-8d/s1280x1920/c104d05e797ba6715fac09b830a8f6158940b603.jpg	\N	Supernatural	9	2022-04-05 14:06:40.944522
\.


--
-- Data for Name: subscribers; Type: TABLE DATA; Schema: public; Owner: mttparry
--

COPY public.subscribers (id, name, email) FROM stdin;
1	test1	test1@test.com
2	Colonel Peeves Macavity	snake.butler@test.com
\.


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 7, true);


--
-- Name: subscribers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mttparry
--

SELECT pg_catalog.setval('public.subscribers_id_seq', 2, true);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: subscribers subscribers_pkey; Type: CONSTRAINT; Schema: public; Owner: mttparry
--

ALTER TABLE ONLY public.subscribers
    ADD CONSTRAINT subscribers_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

