# Polaroid Now+ Instant Camera Generation 3 - Product Page

A mobile-first product detail page for the Polaroid Now+ Instant Camera Generation 3, built with HTML, CSS, and JavaScript.

## Features

- **Mobile-optimized design** - Perfect for mobile devices with 390px width
- **Interactive elements** - Add to cart, wishlist, and AR view functionality
- **Realistic status bar** - iPhone-style status bar with time, battery, and signal indicators
- **Smooth animations** - Hover effects and loading states
- **Accessibility features** - Keyboard navigation and screen reader support
- **Touch gestures** - Swipe detection for mobile interactions

## Design Specifications

Based on the Figma design, this page includes:

- **Status Bar**: iPhone-style status bar with time (9:41), cellular signal, WiFi, and battery indicators
- **Header**: Account, search, and menu icons with centered logo
- **Product Image**: 350x350px product image area
- **Product Information**: Title, subtitle, price (£139.99), and detailed description
- **Action Buttons**: Add to Cart button and wishlist heart icon
- **Product Features**: Bullet-point list of key features
- **AR Button**: View in AR functionality with custom icon

## File Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── assets/             # Assets directory
│   ├── polaroid-camera-56586a.jpg  # Product image (exported from Figma)
│   └── ar-icon.png              # AR icon (exported from Figma)
└── README.md           # This file
```

## Usage

1. Clone or download this repository
2. The images are already exported from Figma and ready to use
3. Open `index.html` in a web browser
4. The page is optimized for mobile viewing (390px width)

## Customization

### Colors
The design uses a clean, modern color palette:
- Primary: `#171726` (Dark blue-gray)
- Secondary: `#1B1B22` (Text color)
- Accent: `#F5F5F7` (Light gray)
- Background: `#FFFFFF` (White)
- Border: `#E6E6F0` (Light border)

### Typography
- Font Family: Roboto (Google Fonts)
- Font Weights: 400 (Regular), 500 (Medium), 600 (Semi-bold)
- Line Heights: Optimized for readability

### Interactive Features

#### Add to Cart Button
- Shows loading state when clicked
- Changes to "Added to Cart!" with green background
- Resets after 2 seconds

#### Wishlist Button
- Toggles between outlined and filled heart
- Changes color to red when active
- Shows notification on state change

#### AR Button
- Simulates AR loading experience
- Shows "Loading AR..." text
- Displays notification about upcoming feature

#### Header Navigation
- Account, search, and menu buttons show notifications
- All buttons have hover effects and focus states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy loading** for images using Intersection Observer
- **Smooth animations** with CSS transitions
- **Touch gesture support** for mobile devices
- **Keyboard navigation** for accessibility
- **Analytics tracking** (placeholder implementation)

## Accessibility

- ARIA labels for all interactive elements
- Keyboard navigation support
- Focus indicators for all clickable elements
- Screen reader friendly structure
- High contrast color scheme

## Mobile Optimizations

- Fixed width design (390px) for consistent mobile experience
- Touch-friendly button sizes (minimum 44px)
- Swipe gesture detection
- Optimized for portrait orientation
- Fast loading with minimal assets

## Future Enhancements

- Real AR implementation using WebXR
- Product image gallery with multiple views
- Size/color selection options
- Customer reviews section
- Related products
- Shopping cart integration
- Payment processing

## License

This project is available for personal and commercial use. 