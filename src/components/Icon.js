import {
    Dot,
    Home,
    LayoutGrid,
    LineChart,
    Menu,
    Package,
    Package2,
    PocketKnife,
    ShoppingCart,
    Users,
} from 'lucide-react';

const iconLookup = {
    Dot,
    Home,
    LayoutGrid,
    LineChart,
    Menu,
    Package,
    Package2,
    PocketKnife,
    ShoppingCart,
    Users,
};

export default function Icon(props) {
    const IconComponent = iconLookup[(props.name in iconLookup) ? props.name : 'Dot'];

    return <IconComponent {...props} />;
}
