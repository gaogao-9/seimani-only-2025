"use client";

import { CloseButton, Drawer } from "@chakra-ui/react";

export interface RoutingMenuDrawerProps extends Drawer.RootProps {
  children: React.ReactNode;
}

export const RoutingMenuDrawer: React.FC<RoutingMenuDrawerProps> = ({
  children,
  ...props
}) => {
  return (
    <Drawer.Root {...props}>
      <Drawer.Backdrop />
      <Drawer.Trigger />
      <Drawer.Positioner>
        <Drawer.Content maxWidth="13rem">
          <Drawer.CloseTrigger asChild>
            <CloseButton size="lg" color="purple.500" />
          </Drawer.CloseTrigger>
          <Drawer.Header />
          <Drawer.Body>{children}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};
