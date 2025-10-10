export interface NavigationItem {
  label: string
  href: string
  icon: string
  active?: boolean
}

export interface AppHeaderProps {
  navigationItems?: NavigationItem[]
}
