export const Loading = () =>{
return <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
<defs>
  <pattern id="squarePattern" width="50" height="50" patternUnits="userSpaceOnUse">
    <rect width="50" height="50" fill="#f0f0f0" />
    <rect x="2" y="2" width="20" height="10" fill="#141414" />
  </pattern>
</defs>
<rect width="100%" height="100%" fill="url(#squarePattern)" />
</svg>



}