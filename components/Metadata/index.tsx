import Head from "next/head";

const Metadata = () => {
    return (
        <Head>
                <meta charSet={"utf-8"}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
                <meta
                    name={"description"}
                    content={"Alexandria, won't you be my Valentine too?"}
                />
                <meta
                    name={"keywords"}
                    content={
                            "Alexandria, Tucay, Valentine, Lover, Princess, Girlfriend, Valentine, Valentine's Day"
                    }
                />
                <meta name={"author"} content={"Deyby Rodriguez"}/>
                <meta name={"robots"} content={"index, follow"}/>

                <meta property={"og:title"} content={"Alexandria, won't you be my Valentine too?"}/>
                <meta property={"og:type"} content={"website"}/>
                <meta
                    property={"og:image"}
                    content={"https://alex-vday.deybyr647.com/ribbon.png"}
                />
                <meta property={"og:image:width"} content={"1200"}/>
                <meta property={"og:image:height"} content={"627"}/>
                <meta property={"og:url"} content={"https://alex-vday.deybyr647.com"}/>
                <meta
                    property={"og:description"}
                    content={"Alexandria, won't you be my Valentine too?"}
                />
                <link rel={"canonical"} href={"https://alex-vday.deybyr647.com"}/>

                <meta
                    name={"twitter:title"}
                    content={"Alexandria, won't you be my Valentine too?"}
                />
                <meta
                    name={"twitter:description"}
                    content={"Alexandria, won't you be my Valentine too?"}
                />
                <meta
                    name={"twitter:image"}
                    content={"https://alex-vday.deybyr647.com/ribbon.png"}
                />

                <title>To My Alexandria...</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
        </Head>
    );
};

export default Metadata;