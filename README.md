# 3D Human Model Dashboard

A React-based dashboard application featuring a 3D human model visualization using Three.js and React Three Fiber.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Modern web browser with WebGL support

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd dashboard
```

2. Install dependencies:

```bash
npm install
```

## 3D Model Setup

The project uses a male base mesh 3D model from Free3D. Here's how to set it up:

1. Download the model:

   - Visit [Male Base Mesh on Free3D](https://free3d.com/3d-model/male-base-mesh-6682.html)
   - Create a free account if you don't have one
   - Download the model in .obj format

2. Model Integration:
   - Place the downloaded model file in `public/models/`
   - The model is loaded using Three.js in the `Human3DView` component
   - The model is optimized for web viewing using the following features:
     - Automatic scaling and positioning
     - Material optimization
     - Performance-focused rendering

## Project Structure

```
dashboard/
├── public/
│   ├── models/           # 3D model files
│   └── index.html
├── src/
│   ├── components/       # React components
│   │   ├── Human3DView/  # 3D model viewer component
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   ├── data/            # Data files
│   ├── App.js
│   └── index.js
└── package.json
```

## Running the Application

1. Start the development server:

```bash
npm start
```

2. Open your browser and navigate to:

```
http://localhost:3000
```

## Key Features

- 3D Human Model Visualization
  - Interactive rotation and zoom
  - Responsive design
  - Performance optimized rendering
- Mobile Responsive Design
  - Uses `useIsMobile` hook for responsive layouts
  - Optimized for both desktop and mobile viewing
- Toast Notifications
  - Uses `useToast` hook for user feedback
  - Customizable notification system

## Dependencies

Main dependencies include:

- React 18
- Three.js
- React Three Fiber
- React Three Drei
- TailwindCSS
- Radix UI Components

## Development

The project uses standard React development practices:

1. Component Structure:

   - Each component is in its own directory
   - Components include their own styles and tests
   - Reusable hooks are in the `hooks` directory

2. Styling:

   - Uses TailwindCSS for styling
   - Custom CSS modules for component-specific styles

3. State Management:
   - React hooks for local state
   - Context API for global state where needed

## Troubleshooting

Common issues and solutions:

1. 3D Model Not Loading:

   - Check if the model file is in the correct location
   - Verify WebGL support in your browser
   - Check browser console for errors

2. Performance Issues:
   - Reduce model complexity if needed
   - Check browser performance tools
   - Ensure hardware acceleration is enabled

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project uses the Male Base Mesh model under the Free3D license. Please ensure you comply with their licensing terms when using the model.

## Support

For issues and feature requests, please create an issue in the repository.
