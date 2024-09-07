import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    appName: string;
}
declare const Button: ({ children, className, appName }: ButtonProps) => react_jsx_runtime.JSX.Element;

declare function Card({ className, title, children, href, }: {
    className?: string;
    title: string;
    children: React.ReactNode;
    href: string;
}): JSX.Element;

export { Button, Card };
