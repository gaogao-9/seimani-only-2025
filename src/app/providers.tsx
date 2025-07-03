import { Provider } from "@/components/ui/provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider forcedTheme="light">{children}</Provider>;
}
