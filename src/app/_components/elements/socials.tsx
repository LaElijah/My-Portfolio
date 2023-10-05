
import styles from '@/app/_styles/components/hero.module.scss';
import { Tooltip } from '@mantine/core';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileCode,
    IconBrandDiscord

} from '@tabler/icons-react';


export default function Socials() {

    const iconSize = {
        width: 32,
        height: 32
    }


    return (
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
    )
}