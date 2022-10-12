PGDMP                     	    z         	   ecommerce    14.4    14.4 -    %           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            &           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            '           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            (           1262    24798 	   ecommerce    DATABASE     i   CREATE DATABASE ecommerce WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE ecommerce;
                postgres    false            �            1259    24892 	   categoria    TABLE     e   CREATE TABLE public.categoria (
    id integer NOT NULL,
    descricao character varying NOT NULL
);
    DROP TABLE public.categoria;
       public         heap    postgres    false            �            1259    24898    categoria_id_seq    SEQUENCE     �   ALTER TABLE public.categoria ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categoria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    213            �            1259    24953    categoria_produto    TABLE     n   CREATE TABLE public.categoria_produto (
    categoria_id integer NOT NULL,
    produto_id integer NOT NULL
);
 %   DROP TABLE public.categoria_produto;
       public         heap    postgres    false            �            1259    24951 "   categoria_produto_categoria_id_seq    SEQUENCE     �   ALTER TABLE public.categoria_produto ALTER COLUMN categoria_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categoria_produto_categoria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    223            �            1259    24952     categoria_produto_produto_id_seq    SEQUENCE     �   ALTER TABLE public.categoria_produto ALTER COLUMN produto_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categoria_produto_produto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    223            �            1259    24885    produto    TABLE     �   CREATE TABLE public.produto (
    id integer NOT NULL,
    descricao character varying NOT NULL,
    preco double precision NOT NULL,
    foto character varying NOT NULL,
    quantidade integer NOT NULL
);
    DROP TABLE public.produto;
       public         heap    postgres    false            �            1259    24884    produto_id_seq    SEQUENCE     �   ALTER TABLE public.produto ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.produto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    212            �            1259    24877    usuario    TABLE       CREATE TABLE public.usuario (
    id integer NOT NULL,
    administrador boolean NOT NULL,
    nome character varying NOT NULL,
    endereco character varying NOT NULL,
    email character varying NOT NULL,
    login character varying NOT NULL,
    senha character varying NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            �            1259    24876    usuario_id_seq    SEQUENCE     �   ALTER TABLE public.usuario ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    210            �            1259    24895    venda    TABLE     �   CREATE TABLE public.venda (
    id integer NOT NULL,
    data_hora timestamp without time zone NOT NULL,
    usuario_id integer NOT NULL
);
    DROP TABLE public.venda;
       public         heap    postgres    false            �            1259    24906    venda_id_seq    SEQUENCE     �   ALTER TABLE public.venda ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.venda_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            �            1259    24922    venda_produto    TABLE     �   CREATE TABLE public.venda_produto (
    venda_id integer NOT NULL,
    produto_id integer NOT NULL,
    quantidade integer NOT NULL
);
 !   DROP TABLE public.venda_produto;
       public         heap    postgres    false            �            1259    24933    venda_produto_produto_id_seq    SEQUENCE     �   ALTER TABLE public.venda_produto ALTER COLUMN produto_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.venda_produto_produto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    24927    venda_produto_venda_id_seq    SEQUENCE     �   ALTER TABLE public.venda_produto ALTER COLUMN venda_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.venda_produto_venda_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    24912    venda_usuario_id_seq    SEQUENCE     �   ALTER TABLE public.venda ALTER COLUMN usuario_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.venda_usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214                      0    24892 	   categoria 
   TABLE DATA           2   COPY public.categoria (id, descricao) FROM stdin;
    public          postgres    false    213   �3       "          0    24953    categoria_produto 
   TABLE DATA           E   COPY public.categoria_produto (categoria_id, produto_id) FROM stdin;
    public          postgres    false    223   �3                 0    24885    produto 
   TABLE DATA           I   COPY public.produto (id, descricao, preco, foto, quantidade) FROM stdin;
    public          postgres    false    212   �3                 0    24877    usuario 
   TABLE DATA           Y   COPY public.usuario (id, administrador, nome, endereco, email, login, senha) FROM stdin;
    public          postgres    false    210   �3                 0    24895    venda 
   TABLE DATA           :   COPY public.venda (id, data_hora, usuario_id) FROM stdin;
    public          postgres    false    214   4                 0    24922    venda_produto 
   TABLE DATA           I   COPY public.venda_produto (venda_id, produto_id, quantidade) FROM stdin;
    public          postgres    false    218   04       )           0    0    categoria_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categoria_id_seq', 1, false);
          public          postgres    false    215            *           0    0 "   categoria_produto_categoria_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.categoria_produto_categoria_id_seq', 1, false);
          public          postgres    false    221            +           0    0     categoria_produto_produto_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.categoria_produto_produto_id_seq', 1, false);
          public          postgres    false    222            ,           0    0    produto_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.produto_id_seq', 1, false);
          public          postgres    false    211            -           0    0    usuario_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuario_id_seq', 1, false);
          public          postgres    false    209            .           0    0    venda_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.venda_id_seq', 1, false);
          public          postgres    false    216            /           0    0    venda_produto_produto_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.venda_produto_produto_id_seq', 1, false);
          public          postgres    false    220            0           0    0    venda_produto_venda_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.venda_produto_venda_id_seq', 1, false);
          public          postgres    false    219            1           0    0    venda_usuario_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.venda_usuario_id_seq', 1, false);
          public          postgres    false    217            }           2606    24905    categoria categoria_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public            postgres    false    213            �           2606    24957 (   categoria_produto categoria_produto_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.categoria_produto
    ADD CONSTRAINT categoria_produto_pkey PRIMARY KEY (categoria_id, produto_id);
 R   ALTER TABLE ONLY public.categoria_produto DROP CONSTRAINT categoria_produto_pkey;
       public            postgres    false    223    223            {           2606    24891    produto produto_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.produto DROP CONSTRAINT produto_pkey;
       public            postgres    false    212            y           2606    24883    usuario usuario_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    210                       2606    24911    venda venda_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.venda
    ADD CONSTRAINT venda_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.venda DROP CONSTRAINT venda_pkey;
       public            postgres    false    214            �           2606    24950     venda_produto venda_produto_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.venda_produto
    ADD CONSTRAINT venda_produto_pkey PRIMARY KEY (venda_id, produto_id);
 J   ALTER TABLE ONLY public.venda_produto DROP CONSTRAINT venda_produto_pkey;
       public            postgres    false    218    218            �           2606    24958    categoria_produto categoria_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.categoria_produto
    ADD CONSTRAINT categoria_id FOREIGN KEY (categoria_id) REFERENCES public.categoria(id) NOT VALID;
 H   ALTER TABLE ONLY public.categoria_produto DROP CONSTRAINT categoria_id;
       public          postgres    false    223    3197    213            �           2606    24944    venda_produto produto_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.venda_produto
    ADD CONSTRAINT produto_id FOREIGN KEY (produto_id) REFERENCES public.produto(id) NOT VALID;
 B   ALTER TABLE ONLY public.venda_produto DROP CONSTRAINT produto_id;
       public          postgres    false    218    3195    212            �           2606    24963    categoria_produto produto_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.categoria_produto
    ADD CONSTRAINT produto_id FOREIGN KEY (produto_id) REFERENCES public.produto(id) NOT VALID;
 F   ALTER TABLE ONLY public.categoria_produto DROP CONSTRAINT produto_id;
       public          postgres    false    212    223    3195            �           2606    24917    venda usuario_id    FK CONSTRAINT     ~   ALTER TABLE ONLY public.venda
    ADD CONSTRAINT usuario_id FOREIGN KEY (usuario_id) REFERENCES public.usuario(id) NOT VALID;
 :   ALTER TABLE ONLY public.venda DROP CONSTRAINT usuario_id;
       public          postgres    false    210    3193    214            �           2606    24939    venda_produto venda_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.venda_produto
    ADD CONSTRAINT venda_id FOREIGN KEY (venda_id) REFERENCES public.venda(id) NOT VALID;
 @   ALTER TABLE ONLY public.venda_produto DROP CONSTRAINT venda_id;
       public          postgres    false    214    3199    218                  x������ � �      "      x������ � �            x������ � �            x������ � �            x������ � �            x������ � �     