import styles from '@/app/_styles/components/hero.module.scss';
import Link from "next/link";
import { Tooltip } from '@mantine/core';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileCode,
    IconBrandDiscord

} from '@tabler/icons-react';

import Socials from './elements/socials';



export default function Hero(): JSX.Element {

    const iconSize = {
        width: 32,
        height: 32
    }

    return (
        <section className={styles.container}>


            <div className={styles.hook}>


                <div className={styles.details}>

                    <h2>Hi! my name is,</h2>
                    <h1>Elijah Allotey,</h1>
                    <h3>Im a web developer! I use my skills to make creative solutions to problems.</h3>

                    <Link href="/contact" className={styles.button}><p>Contact me</p></Link>

                    <div className={styles.socials}>


                        <Tooltip
                            label="Github"
                        >
                            <a href="/contact" >
                                <IconBrandGithub {...iconSize} />
                            </a>
                        </Tooltip>

                        <Tooltip
                            label="Linkedin"
                        >
                            <a href="/contact" >
                                <IconBrandLinkedin {...iconSize} />
                            </a>
                        </Tooltip>

                        <Tooltip
                            label="Discord"
                        >
                            <a href="/contact" >
                                <IconBrandDiscord {...iconSize} />
                            </a>
                        </Tooltip>

                        <Tooltip
                            label="Resume"
                        >
                            <a href="/contact" >
                                <IconFileCode {...iconSize} />
                            </a>
                        </Tooltip>

                    </div>

                </div>



            </div>

            <div className={styles.media}>


                <div className={styles.image}>

                    <img
                        src={"/assets/bust.svg"}
                        alt="Stylized self portrait"
                    />

                </div>

            </div>

        </section>
    )
}