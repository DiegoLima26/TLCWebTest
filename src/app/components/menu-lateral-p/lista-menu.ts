export class MenuItem 
{
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}
export const menuList = [
    new MenuItem('Productos', 'pag-productos', 'Productos Generales', 'build'),
    new MenuItem('Cajas De Distribución', 'componente-uno', 'Cajas de distribución', 'account_tree'),
    new MenuItem('Cables De Fibra Óptica', 'mathematics', 'Cables de fibra optica', 'gesture'),
    new MenuItem('Conectores Y Acopladores', 'physics', 'Conectores/Acopladores', 'settings_input_composite'),
    new MenuItem('Articulos De Limpieza', 'physics', 'Productos de limpieza', 'clean_hands'),
    new MenuItem('Equipos De Medición', 'physics', 'Equipos de medición', 'dvr'),
    new MenuItem('Ferreteria', 'physics', 'Ferreteria planta externa', 'handyman')
];