// icon:trash2-fill | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from "react";

function IconTrash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M2.037 3.225A.703.703 0 012 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 01-.037.225l-1.684 10.104A2 2 0 0110.305 15H5.694a2 2 0 01-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
    </svg>
  );
}

export default IconTrash
