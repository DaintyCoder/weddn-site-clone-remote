import Link from "next/link";
import React from "react";
import Button, { IButtonProps } from "./ButtonCmp";

interface ILinkButtonCmp extends IButtonProps {
  external?: boolean;
  href: string;
}

const LinkButtonCmp: React.FC<ILinkButtonCmp> = ({ external, href, ...rest }) => {
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" /* title={title || 'Open link in new tab'} */>
      <Button {...rest} />
    </a>
  ) : (
    <Link href={href}>
        <Button {...rest} />
    </Link>
  );
};

export default LinkButtonCmp;