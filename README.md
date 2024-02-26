# TRISD 
```TRIS (means 3 in klamegna) + D```
  <h3 align="center">A 3D WEB APP</h3>
<div display="flex" align-items="center">
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>


## Introduction
Last I cheaked Many large corporations already use 3D graphics to showcase their products.```showcasing products``` and ```place visualization and prosentation``` are real world subjects that initiate me to learn and do this project.

TRISD has a single magor functionality:
- It allows users to display their 3d models (.glb/.gltf file)

TRISD has the following intersting features: 
- customizble homepage
      - change UI struecture by dragging components, by changing their contents and by styling them  <br />
      - change the texture of 3d model object
- file uploading with normal file input method and drag and drop method
- customizing 3d model displaying stage  <br />
      - chnage floor texture
- setttings to toggle between page properties <br />
      - enable / disable component draggability  <br />
      - enable / disable model rotation , zoom or movement with cursor  <br />
- customized and animated cursor
- animated introduction page

## Live Demo 

   https://trisd.netlify.app/

## Tech-Stack

- React.js -- the only used front-end library
- Three.js -- rendering and 3d model animating
- React Three Fiber -- 
- React Three Drei
- Vite  ---  project creator
- Tailwind CSS -- styling elements and components
- Framer Motion  -- animating react components and elements
- Valtio -- state management

## <a name="features">🔋 Features</a>

👉 **3D Swag Generation**: Generate unique 3D shirts/swag items dynamically

👉 **Color Customization**: Apply any color to the 3D shirt/swag for personalized styling.

👉 **Logo Upload Functionality**: Enable users to upload any file as a logo, integrating it seamlessly onto the 3D shirt.

👉 **Texture Image Upload**: Allow users to upload texture images to style the 3D shirt/swag.

👉 **AI-Generated Logo Integration**: Utilize AI to generate logos and intelligently apply them to the 3D shirt.

👉 **AI-Generated Textures**: Implement AI-generated textures for enhanced 3D shirt customization.

👉 **Download Options**:Dynamically change the application theme based on the selected color, enhancing user experience.

👉 **Theme Change with Color Selection**: Dynamically change the application theme based on the selected color, enhancing user experience

👉 **Responsive 3D Application**: Ensure the application is responsive, delivering a seamless experience across various devices.

👉 **Framer Motion Animation**: Implement framer motion animations for smooth transitions between different 3D models.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/project_threejs_ai.git
cd project_threejs_ai
```

**Installation**

Install the project dependencies using npm in both client and server folders:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
OPENAI_API_KEY=
```

Replace the placeholder values with your actual OpenAI credentials. You can obtain these credentials by signing up on the [Open website](https://openai.com/).

**Running the Project**

1. Server
   ```bash
   npm start
   ```
2. Client
   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>Customizer.jsx</code></summary>

```javascript
<button className='download-btn' onClick={downloadCanvasToImage}>
  <img
    src={download}
    alt='download_image'
    className='w-3/5 h-3/5 object-contain'
  />
</button>
```
</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,600;1,900&display=swap");
@import url("https://rsms.me/inter/inter.css");

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  font-family: "Inter", sans-serif;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

.app {
  @apply relative w-full h-screen overflow-hidden;
}

.home {
  @apply w-fit xl:h-full flex xl:justify-between justify-start items-start flex-col xl:py-8 xl:px-36 sm:p-8 p-6 max-xl:gap-7 absolute z-10;
}

.home-content {
  @apply flex-1 xl:justify-center justify-start flex flex-col gap-10;
}

.head-text {
  @apply xl:text-[10rem] text-[6rem] xl:leading-[11rem] leading-[7rem] font-black text-black;
}

.download-btn {
  @apply w-14 h-14 flex justify-center items-center rounded-full glassmorphism cursor-pointer outline-none;
}

.editortabs-container {
  @apply glassmorphism w-16 border-[2px] rounded-lg flex flex-col justify-center items-center ml-1 py-4 gap-4;
}

.filtertabs-container {
  @apply absolute z-10 bottom-5 right-0 left-0 w-full flex justify-center items-center flex-wrap gap-4;
}

.aipicker-container {
  @apply absolute left-full ml-3 glassmorphism p-3 w-[195px] h-[220px] rounded-md flex flex-col gap-4;
}

.aipicker-textarea {
  @apply w-full bg-transparent text-sm border border-gray-300 p-2 outline-none flex-1;
}

.filepicker-container {
  @apply absolute left-full ml-3 glassmorphism p-3 w-[195px] h-[220px] flex flex-col rounded-md;
}

.filepicker-label {
  @apply border border-gray-300 py-1.5 px-2 rounded-md shadow-sm text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer w-fit;
}

.tab-btn {
  @apply w-14 h-14 flex justify-center items-center cursor-pointer select-none;
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 2px 30px 0 rgba(31, 38, 135, 0.07);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

input[type="file"] {
  z-index: -1;
  position: absolute;
  opacity: 0;
}

.sketch-picker {
  width: 170px !important;
  background: rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 2px 30px 0 rgba(31, 38, 135, 0.07) !important;
  backdrop-filter: blur(4px) !important;
  -webkit-backdrop-filter: blur(4px) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  border-radius: 6px !important;
}

.sketch-picker > div:nth-child(3) {
  display: none !important;
}
```
</details>

## <a name="links">🔗 Links</a>

Assets used in the project are [here](https://drive.google.com/drive/folders/166wA5NsMV_5D8NN7ujDDbPXC1X65vf2I)

## <a name="more">🚀 More</a>

**Advance your skills with Next.js 14 Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsmastery.pro/next14" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/557837ce-f612-4530-ab24-189e75133c71" alt="Project Banner">
</a>

<br />
<br />

**Accelerate your professional journey with the Expert Training program**

And if you're hungry for more than just a course and want to understand how we learn and tackle tech challenges, hop into our personalized masterclass. We cover best practices, different web skills, and offer mentorship to boost your confidence. Let's learn and grow together!

<a href="https://www.jsmastery.pro/masterclass" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/fed352ad-f27b-400d-9b8f-c7fe628acb84" alt="Project Banner">
</a>

#
