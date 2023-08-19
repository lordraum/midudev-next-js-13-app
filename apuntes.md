# Next.js

## Instalación app y primeros pasos
- Crear next-app => `pnpm create next-app`
- Instalar standard => `pnpm i standard -D -E`
  - config => .eslintrc.json => extends => `"node_modules/standard/eslintrc.json"`

## Sistema de rutas
- app/ => Carpeta principal y root del sistema de rutas
- page.js/jsx => Archivo que renderiza la ruta
- Las carpetas anidadas dentro de app serán las rutas anidadas y tendrán archivos page.jsx para renderizar.

## Layout

- layout.js/jsx
  - En /app => Archivo base que envuelve la aplicación, devuelve el componente RootLayout.
  - En /carpetas anidadas => Archivo base de la ruta
- Los layouts tienen herencia, según anidación, incluso heredan estados.

## Link
- Componente que permite realizar naveegaciones internas
- Importar => `import Link from 'next/link'`
```jsx
// links => array de objetos con las propiedades route y label
{links.map(({ route, label }) => (
    <li key={route}>
      <Link href={route}>{label}</Link>
    </li>
))}
```

## Componentes
- En next js 13 es posible dentro de /app crear una carpeta components, que no reconocerá como ruta.

## Estilos

### Global
- Import 'RUTA'

### Local
- CSS Modules => Next js en compatible con este módulo
  - Crear archivo css local => Component.module.css
  - En el componente se cargan con `import styles from './Component.module.css'`
  - Selectores con punto (ej .header {}) => Se cargan en el componente como `className = {styles.element} => ej className = {styles.header}`