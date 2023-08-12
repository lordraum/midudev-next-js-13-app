# Next.js

## Instalación app y primeros pasos
- Crear next-app => `pnpm create next-app`
- Instalar standard => `pnpm i standard -D -E`
  - config => .eslintrc.json => extends => `"node_modules/standard/eslintrc.json"`

## Creando ruta principal
- app/ => Carpeta principal y root del sistema de rutas
- page.jsx => Archivo que renderiza la ruta
- Las carpetas anidadas dentro de app serán las rutas anidadas y tendrán archivos page.jsx para renderizar.
- layout.js
  - /app => Archivo base que envuelve la aplicación, devuelve el componente RootLayout.
  - /carpetas anidadas => Archivo base de la ruta

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