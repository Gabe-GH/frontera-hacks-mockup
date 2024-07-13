import Link from "next/link";
import Image from "next/image";

import 'dotenv/config';

import styles from "./DiscordIcon.module.css";

export default function DiscordBtn() {
  console.log(process.env.FRONTERA_DISCORD_INVITE)

  return (
    <Link
      className={`${styles.customBtnRadius} btn btn-ghost p-4 md:px-2 md:py-8`}
      href={`${process.env.FRONTERA_DISCORD_INVITE}`}
    >
      <Image
      src={"discord_icon.svg"}
      width={5}
      height={5}
      className={`${styles.discordIcon}`}
      alt=""
      />
    </Link>
  );
}
