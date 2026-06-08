import { LinkProps } from "next/link";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'outline'
}
export type FormContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'light' | 'dark'
};
export type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'default' | 'small' | 'large',
    bg?: "light" | "dark"
}
export type MessageProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'success' | 'loading' | 'error',
    disableOnContent?: 'never' | 'sm' | 'md' | 'lg',
    content?: String
}
export type AlignmentProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'rowLeft' | 'rowCenter' | 'rowRight' | 'colLeft' | 'colCenter' | 'colRight',
    gap?: 'sm' | 'md' | 'lg'
};
export type ColumnDividerProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'thin' | 'medium' | 'thick'
}
export type NavlinkProps = React.HTMLAttributes<HTMLDivElement> & Partial<LinkProps> & {
    variant?: 'mainbar' | 'sidebar',
    navigateRoute?: boolean
}
export type ResponsiveProps = React.HTMLAttributes<HTMLDivElement> & ResponsiveVariants;
export type ProfileAvatarProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'sidebar' | 'mainbar',
    avatarUrl?: string,
}
export type ProfileIconProps = {
    avatarProps: ProfileAvatarProps
}
export type HeadingProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
    variant?: 'sm' | "md" | "lg" | "xl"
}
//VARIANTS
export type ResponsiveVariants = {
    display?: 'block' | 'inline' | 'inlineBlock' | 'flex' | 'inlineFlex' | 'grid' | 'hidden',
    sm?: 'default' | 'block' | 'hidden' | 'flex' | 'inlineBlock',
    md?: 'default' | 'block' | 'hidden' | 'flex' | 'inlineBlock',
    lg?: 'default' | 'block' | 'hidden' | 'flex' | 'inlineBlock',
}