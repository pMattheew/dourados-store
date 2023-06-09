import { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';

interface LayoutProps {
    start?: boolean;
    title: string;
    children: ReactNode;
}

export default function Layout({ start, title, children }: LayoutProps) {
    const processedTitle = title
        ? start
            ? `${title} | Dourado's Store`
            : `Dourado's Store | ${title}`
        : `Dourado's Store`;

    return (
        <>
            <Head>
                <title>{processedTitle}</title>
                <meta
                    name="description"
                    content={`Dourados Store ${title ? title : ''}`}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <NavBar />
            <main className="h-full">{children}</main>
        </>
    );
}
