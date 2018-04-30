# PhantomScripts

## [Checkout our demo page for this feature](https://phantomvrtranslate.github.io/Phantom-Demo-Site/)


## Preview a 3D rendering of your VR HTML page
+ Early Stage proof of concept where users can render image, texts, and video content in a 3d environment using specified semantic class names and attributes with `PhantomScripts`


### Phantom Class Names and Attributes 
+ By adding these semantic tags to your specified content, Phantom will be able to locate these tags and render their contents within the VR environment seamlessly

#### `text-vr` class name 
put text content into the innerHTML of a text element to render the text
  - Text with over 120 characters will have *multiple pages* (`<` & `>` page buttons will render if there are *multiple pages*)
```html
<p class="text-vr">This will be rendered in its own text card!</p> 
<p class="text-vr">Now if I wanted to type out a giant story to show the effects 
  of what having over 120 characters would do the text component
  then I would probably use this piece of text right here
</p>
```

#### `image-vr` class name 
put image url into `src` tag to render the image 
```html
<img src="https://imageUrlHere.jpg" class="image-vr" alt="" />
<div src="https://anotherImageUrlHere.jpg" class="image-vr" alt=""></div> 
```

#### `video-vr` class name 
put video url into `src` tag to render the image 
```html
<video src="https://videoUrlHere.jpg" class="video-vr" alt="" />
<div src="https://anotherVideoUrlHere.jpg" class="video-vr" alt=""></div> 
```

#### `image-flex` attribute
change flex unit size of `image-vr` *default at 1* and `video-vr` *default at 2*
```html
<img src="https://imageToTakeUpMoreSpace.jpg" class="image-vr" image-flex="2" alt="" />
<video src="https://videoToTakeLessSpace.jpg" class="video-vr" image-flex="1" alt="" />
```

#### `carousel-image-vr` class name 
Use with any number of HTML tags with an image source to have all tagged content to appear
within the a single 3d component
+ renders the `<` & `>` page buttons to shift through the collection 
```html
<img src="https://image1.jpg" class="image-vr" alt="" />
<img src="https://image2.jpg" class="image-vr" alt="" />
<img src="https://image3.jpg" class="image-vr"  alt="" />
<img src="https://image4.jpg" class="image-vr"  alt="" />
<img src="https://image5.jpg" class="image-vr"  alt="" />
```

#### `gallery-item` class name 
Add this class name on up to 6 HTML tags with image or video sources to render content within a grid-gallery display
+ video and image content should be referenced in the `src` attribute
```html
<img src="https://image1.jpg" class="gallery-item" alt="" />
<img src="https://video1.jpg" class="gallery-item" alt="" />
<img src="https://image2.jpg" class="gallery-item" alt="" />
<img src="https://image3.jpg" class="gallery-item"  ci-flex-vr="1" alt="" />
<img src="https://video2.jpg" class="gallery-item" alt="" />
<img src="https://video3.jpg" class="gallery-item" alt="" />
```

#### `carousel-image-vr` class name 
Use with any number of HTML tags with an image source to have all tagged content to appear
within the a single 3d component
+ renders the `<` & `>` page buttons to shift through the collection 
```html
<img src="https://image1.jpg" class="image-vr" alt="" />
<img src="https://image2.jpg" class="image-vr" alt="" />
<img src="https://image3.jpg" class="image-vr"  alt="" />
<img src="https://image4.jpg" class="image-vr"  alt="" />
<img src="https://image5.jpg" class="image-vr"  alt="" />
```

### Getting Started

1. Copy and Paste the subsequent code under the body tag in your HMTL page 
```html
<body>
  <div style='position: absolute; z-index: 100000; height: 100vh; width: 100vw;' id="phantom"></div>
    <script src="https://rawgit.com/PhantomVRTranslate/PhantomScripts/master/client.bundle.js"></script>
    <script>
      function startVR() {
      window.hideBody(); 
      let mobile = false;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true;
        }
      ReactVR.init(
        'https://rawgit.com/PhantomVRTranslate/PhantomScripts/master/index.bundle.js',document.getElementById('phantom'), {mobile}
      );
      document.querySelector('[title="Full Screen"]').click(); 
    }
    </script>
  ...
</body> 
```
2. Create a any html element with an onlcick event handler of 'startVR()' within the body of your HTML page
+ we recommend using a button
```html
<body>
  ...
  <button onclick='startVR()'></button>
  ...
</body> 
```
3. Add your our class names and attribute tags to render your content in the 3D VR Environment (visible immediately through your browser)!
```html
<body>
  ...
  //renders single image file in its own component 
    <img src="https://image1.jpg" class="item-vr" flex-image="2" alt="" />
  
  //renders single video file in its own component 
    <img src="https://video1.jpg" class="video-vr" alt="" />
  
  //renders multiple images and video within a gallery component 
    <img src="https://image2.jpg" class="gallery-item" alt="" />
    <img src="https://image3.jpg" class="gallery-item"  ci-flex-vr="1" alt="" />
    <img src="https://video2.jpg" class="gallery-item" alt="" />
    <img src="https://video3.jpg" class="gallery-item" alt="" />
  ...
</body>

```
