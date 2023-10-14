"use client";
import { useMediaQuery } from "@mantine/hooks";
import { Burger, Menu } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Dropdown({
  links,
}: {
  links: Link[];
}): JSX.Element | undefined {
  const router = useRouter();

  if (useMediaQuery("(max-width: 768px)")) {
    return (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Burger aria-label="Toggle menu" />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => router.push(`/`)}>Home</Menu.Item>
          {links.map(
            ({ label, key, link }: Link): JSX.Element => (
              <Menu.Item key={key} onClick={() => router.push(link)}>
                {label}
              </Menu.Item>
            ),
          )}
        </Menu.Dropdown>
      </Menu>
    );
  }
}
