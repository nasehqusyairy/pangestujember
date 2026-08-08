import * as LucideReact from 'lucide-react';

export type LucideIconProps = LucideReact.LucideProps & { icon: keyof typeof LucideReact }

export function LucideIcon({ icon, size = 24, color = 'currentColor', ...props }: LucideIconProps) {
    const IconComponent = LucideReact[icon as keyof typeof LucideReact] as LucideReact.LucideIcon

    if (!IconComponent) {
        const FallbackIcon = LucideReact.HelpCircle;
        return <FallbackIcon size={size} color={color} {...props} />;
    }

    return <IconComponent size={size} color={color} {...props} />;
};