export interface HeaderProps {
  name: string;
  url: string;
}

export interface MetaTagProps {
  name?: string;
  httpEquiv?: string;
  property?: string;
  content: string;
}

export interface MetaLinkProps {
    rel: string;
    type?: string;
    sizes?: string;
    href: string;
}