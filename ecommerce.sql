--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2022-09-25 15:37:40

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
-- TOC entry 213 (class 1259 OID 24892)
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria (
    id integer NOT NULL,
    descricao character varying NOT NULL
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24898)
-- Name: categoria_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.categoria ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categoria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 223 (class 1259 OID 24953)
-- Name: categoria_produto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria_produto (
    categoria_id integer NOT NULL,
    produto_id integer NOT NULL
);


ALTER TABLE public.categoria_produto OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24951)
-- Name: categoria_produto_categoria_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.categoria_produto ALTER COLUMN categoria_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categoria_produto_categoria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 24952)
-- Name: categoria_produto_produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.categoria_produto ALTER COLUMN produto_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categoria_produto_produto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 212 (class 1259 OID 24885)
-- Name: produto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produto (
    id integer NOT NULL,
    descricao character varying NOT NULL,
    preco double precision NOT NULL,
    foto character varying NOT NULL,
    quantidade integer NOT NULL
);


ALTER TABLE public.produto OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 24884)
-- Name: produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.produto ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.produto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 24877)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    administrador boolean NOT NULL,
    nome character varying NOT NULL,
    endereco character varying NOT NULL,
    email character varying NOT NULL,
    login character varying NOT NULL,
    senha character varying NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 24876)
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.usuario ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 24895)
-- Name: venda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.venda (
    id integer NOT NULL,
    data_hora timestamp without time zone NOT NULL,
    usuario_id integer NOT NULL
);


ALTER TABLE public.venda OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 24906)
-- Name: venda_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.venda ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.venda_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 24922)
-- Name: venda_produto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.venda_produto (
    quantidade character varying NOT NULL,
    venda_id integer NOT NULL,
    produto_id integer NOT NULL
);


ALTER TABLE public.venda_produto OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 24933)
-- Name: venda_produto_produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.venda_produto ALTER COLUMN produto_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.venda_produto_produto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 24927)
-- Name: venda_produto_venda_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.venda_produto ALTER COLUMN venda_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.venda_produto_venda_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 217 (class 1259 OID 24912)
-- Name: venda_usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.venda ALTER COLUMN usuario_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.venda_usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3197 (class 2606 OID 24905)
-- Name: categoria categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id);


--
-- TOC entry 3203 (class 2606 OID 24957)
-- Name: categoria_produto categoria_produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria_produto
    ADD CONSTRAINT categoria_produto_pkey PRIMARY KEY (categoria_id, produto_id);


--
-- TOC entry 3195 (class 2606 OID 24891)
-- Name: produto produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_pkey PRIMARY KEY (id);


--
-- TOC entry 3193 (class 2606 OID 24883)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 3199 (class 2606 OID 24911)
-- Name: venda venda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venda
    ADD CONSTRAINT venda_pkey PRIMARY KEY (id);


--
-- TOC entry 3201 (class 2606 OID 24950)
-- Name: venda_produto venda_produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venda_produto
    ADD CONSTRAINT venda_produto_pkey PRIMARY KEY (venda_id, produto_id);


--
-- TOC entry 3207 (class 2606 OID 24958)
-- Name: categoria_produto categoria_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria_produto
    ADD CONSTRAINT categoria_id FOREIGN KEY (categoria_id) REFERENCES public.categoria(id) NOT VALID;


--
-- TOC entry 3206 (class 2606 OID 24944)
-- Name: venda_produto produto_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venda_produto
    ADD CONSTRAINT produto_id FOREIGN KEY (produto_id) REFERENCES public.produto(id) NOT VALID;


--
-- TOC entry 3208 (class 2606 OID 24963)
-- Name: categoria_produto produto_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria_produto
    ADD CONSTRAINT produto_id FOREIGN KEY (produto_id) REFERENCES public.produto(id) NOT VALID;


--
-- TOC entry 3204 (class 2606 OID 24917)
-- Name: venda usuario_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venda
    ADD CONSTRAINT usuario_id FOREIGN KEY (usuario_id) REFERENCES public.usuario(id) NOT VALID;


--
-- TOC entry 3205 (class 2606 OID 24939)
-- Name: venda_produto venda_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venda_produto
    ADD CONSTRAINT venda_id FOREIGN KEY (venda_id) REFERENCES public.venda(id) NOT VALID;


-- Completed on 2022-09-25 15:37:40

--
-- PostgreSQL database dump complete
--

