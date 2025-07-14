# The Secret Pizza Club - Landing Page

Landing page minimalista para The Secret Pizza Club con diseño inspirado en Folklore.

## Características

- ✅ Slideshow automático con 20 fotos mezcladas
- ✅ Logo oficial en navegación
- ✅ Sección de menú con enlace a menubot
- ✅ Horarios de servicio
- ✅ Ubicación con mapa de Google
- ✅ Historia del equipo
- ✅ Feed de Instagram (API real)
- ✅ Formulario de contacto con Formspree
- ✅ Footer con imagen personalizada
- ✅ Tipografía DM Sans
- ✅ Paleta de colores personalizada
- ✅ Diseño responsive

## Configuración de Instagram API

Para usar el feed real de Instagram, necesitas configurar las credenciales:

### 1. Crear aplicación en Facebook Developers
1. Ve a [Facebook Developers](https://developers.facebook.com/)
2. Crea una nueva aplicación
3. Agrega el producto "Instagram Basic Display"

### 2. Obtener credenciales
1. Ve a "Instagram Basic Display" > "Basic Display"
2. Copia el "User Token" y "User ID"

### 3. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=tu_token_aqui
NEXT_PUBLIC_INSTAGRAM_USER_ID=tu_user_id_aqui
```

### 4. Alternativa sin API
Si no configuras las credenciales, el componente mostrará posts de muestra usando las imágenes locales.

## Instalación

```bash
npm install
npm run dev
```

## Tecnologías

- Next.js 15
- TypeScript
- CSS Modules
- Instagram Basic Display API
- Formspree
- Google Fonts (DM Sans)

## Estructura

```
src/
├── components/          # Componentes React
├── lib/               # Utilidades (Instagram API)
├── app/               # Páginas y layout
└── styles/            # Estilos globales
```

## Colores

- Rosa: `#E9B3D3`
- Verde: `#00AE8D`
- Negro: `#101820`
- Blanco: `#FFFFFF`
