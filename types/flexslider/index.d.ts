/// <reference types="jquery" />

declare namespace FlexSlider {
    interface SliderObject {
        [index: number]: JQuery;
        length: number;

        /**
         * The ul.slides within the slider
         */
        container: JQuery;
        /**
         * The slides of the slider
         */
        slides: JQuery;
        /**
         * The total number of slides in the slider
         */
        count: number;
        /**
         * The slide currently being shown
         */
        currentSlide: number;
        /**
         * Useful in .before(), the slide currently animating to
         */
        animatingTo: number;
        /**
         * is slider animating?
         */
        animating: boolean;
        /**
         * is the slider at either end?
         */
        atEnd: boolean;
        /**
         * force slider to stay paused during pauseOnHover event
         */
        manualPause: boolean;
        /**
         * The slider controlNav
         */
        controlNav: JQuery;
        /**
         * The slider directionNav
         */
        directionNav: JQuery;
        /**
         * The controlsContainer element of the slider
         */
        controlsContainer: JQuery;
        /**
         * The manualControls element of the slider
         */
        manualControls: JQuery;
        /**
         * Move slider
         */
        flexAnimate: (target: any, pause?: boolean, override?: boolean, withSync?: boolean, fromNav?: boolean) => any;
        /**
         * Pause slider slideshow interval
         */
        pause: () => any;
        /**
         * Play slider slideshow interval
         */
        play: () => void;
        /**
         * Resume slider slideshow interval
         */
        resume: () => any;
        /**
         * returns boolean if slider can advance
         */
        canAdvance: (target: any, fromNav?: boolean) => boolean;
        /**
         * get target given a direction
         */
        getTarget: (dir: "next" | "prev") => any;
    }

    interface Options {
        /**
         * Prefix string attached to the class of every element generated by the
         * plugin
         */
        namespace?: string | undefined;
        /**
         * Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at
         * your own peril
         */
        selector?: string | undefined;
        /**
         * Select your animation type, "fade" or "slide"
         * @default fade
         */
        animation?: "fade" | "slide" | undefined;
        /**
         * Determines the easing method used in jQuery transitions. jQuery easing
         * plugin is supported!
         * @default swing
         */
        easing?: "swing" | "linear" | string | undefined;
        /**
         * Select the sliding direction, "horizontal" or "vertical"
         * @default horizontal
         * @since v1.9
         */
        direction?: "horizontal" | "vertical" | undefined;
        /**
         * Reverse the animation direction
         * @default false
         */
        reverse?: boolean | undefined;
        /**
         * Should the animation loop? If false, directionNav will received "disable"
         * classes at either end
         * @default true
         */
        animationLoop?: boolean | undefined;
        /**
         * Allow height of the slider to animate smoothly in horizontal mode
         * @default false
         */
        smoothHeight?: boolean | undefined;
        /**
         * The slide that the slider should start on. Array notation (0 = first
         * slide)
         * @default 0
         * @since v1.9
         */
        startAt?: number | undefined;
        /**
         * Animate slider automatically
         * @default true
         */
        slideshow?: boolean | undefined;
        /**
         * Set the speed of the slideshow cycling, in milliseconds
         * @default 7000
         */
        slideshowSpeed?: number | undefined;
        /**
         * Set the speed of animations, in milliseconds
         * @default 600
         * @since v1.9
         */
        animationSpeed?: number | undefined;
        /**
         * Set an initialization delay, in milliseconds
         * @default 0
         */
        initDelay?: number | undefined;
        /**
         * Randomize slide order
         * @default false
         */
        randomize?: boolean | undefined;
        /**
         * Fade in the first slide when animation type is "fade"
         * @default true
         */
        fadeFirstSlide?: boolean | undefined;
        /**
         * Whether or not to put captions on thumbnails when using the "thumbnails"
         * controlNav.
         * @default false
         */
        thumbCaptions?: boolean | undefined;

        // Usability features
        /**
         * Pause the slideshow when interacting with control elements, highly
         * recommended.
         * @default true
         */
        pauseOnAction?: boolean | undefined;
        /**
         * Pause the slideshow when hovering over slider, then resume when no longer
         * hovering
         * @default false
         */
        pauseOnHover?: boolean | undefined;
        /**
         * Pause the slideshow when tab is invisible, resume when visible. Provides
         * better UX, lower CPU usage.
         * @default true
         */
        pauseInvisible?: boolean | undefined;
        /**
         * Slider will use CSS3 transitions if available
         * @default true
         */
        useCSS?: boolean | undefined;
        /**
         * Allow touch swipe navigation of the slider on touch-enabled devices
         * @default true
         */
        touch?: boolean | undefined;
        /**
         * If using video in the slider, will prevent CSS3 3D Transforms to avoid
         * graphical glitches
         * @default false
         */
        video?: boolean | undefined;

        // Primary Controls
        /**
         * Create navigation for paging control of each slide? Note: Leave true for
         * manualControls usage
         * @default true
         */
        controlNav?: "thumbnails" | boolean | undefined;
        /**
         * Create navigation for previous/next navigation? (true/false)
         * @default true
         */
        directionNav?: boolean | undefined;
        /**
         * Set the text for the "previous" directionNav item
         * @default Previous
         */
        prevText?: string | undefined;
        /**
         * Set the text for the "next" directionNav item
         * @default Next
         */
        nextText?: string | undefined;

        // Secondary Navigation
        /**
         * Allow slider navigating via keyboard left/right keys
         * @default true
         * @since v1.9
         */
        keyboard?: boolean | undefined;
        /**
         * Allow keyboard navigation to affect multiple sliders. Default behavior
         * cuts out keyboard navigation with more than one slider present.
         * @default false
         */
        multipleKeyboard?: boolean | undefined;
        /**
         * Requires jquery.mousewheel.js
         * (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider
         * navigating via mousewheel
         * @default false
         */
        mousewheel?: boolean | undefined;
        /**
         * Create pause/play dynamic element
         * @default false
         */
        pausePlay?: boolean | undefined;
        /**
         * Set the text for the "pause" pausePlay item
         * @default Pause
         */
        pauseText?: string | undefined;
        /**
         * Set the text for the "play" pausePlay item
         * @default Play
         */
        playText?: string | undefined;

        // Special properties
        /**
         * Declare which container the navigation elements should be appended too.
         * Default container is the FlexSlider element. Example use would be
         * $(".flexslider-container"). Property is ignored if given element is not
         * found.
         */
        controlsContainer?: JQuery | undefined;
        /**
         * Declare custom control navigation. Examples would be $(".flex-control-nav
         * li") or "#tabs-nav li img", etc. The number of elements in your
         * controlNav should match the number of slides/tabs.
         */
        manualControls?: JQuery | undefined;
        /**
         * Custom prev / next button. Must be two jQuery elements. In order to make
         * the events work they have to have the classes "prev" and "next" (plus
         * namespace)
         */
        customDirectionNav?: JQuery | undefined;
        /**
         * Mirror the actions performed on this slider with another
         * slider. Use with care.
         */
        sync?: string | undefined;
        /**
         * Internal property exposed for turning the slider into a
         * thumbnail navigation for another slider
         */
        asNavFor?: string | undefined;

        // Carousel Options
        /**
         * Box-model width of individual carousel items, including
         * horizontal borders and padding.
         * @default 0
         */
        itemWidth?: number | undefined;
        /**
         * Margin between carousel items.
         * @default 0
         */
        itemMargin?: number | undefined;
        /**
         * Minimum number of carousel items that should be visible.
         * Items will resize fluidly when below this.
         * @default 1
         */
        minItems?: number | undefined;
        /**
         * Maxmimum number of carousel items that should be visible.
         * Items will resize fluidly when above this limit.
         * @default 0
         */
        maxItems?: number | undefined;
        /**
         * Number of carousel items that should move on animation. If
         * 0, slider will move all visible items.
         * @default 0
         */
        move?: number | undefined;
        /**
         * Whether or not to allow a slider comprised of a single slide
         * @default true
         */
        allowOneSlide?: boolean | undefined;

        // Browser Specific
        /**
         * Set to true when Firefox is the browser used.
         * @default false
         */
        isFirefox?: boolean | undefined;

        /**
         * Whether or not to enable RTL mode
         * @default false
         */
        rtl?: boolean | undefined;
    }

    interface Methods {
        /**
         * Fires when the slider loads the first slide
         */
        start?: ((slider: SliderObject) => void) | undefined;
        /**
         * Fires asynchronously with each slider animation
         */
        before?: ((slider: SliderObject) => void) | undefined;
        /**
         * Fires after each slider animation completes
         */
        after?: ((slider: SliderObject) => void) | undefined;
        /**
         * Fires when the slider reaches the last slide (asynchronous)
         */
        end?: ((slider: SliderObject) => void) | undefined;
        /**
         * Fires after a slide is added
         */
        added?: ((slider: SliderObject) => void) | undefined;
        /**
         * Fires after a slide is removed
         */
        removed?: ((slider: SliderObject) => void) | undefined;
        /**
         * Fires after the slider is initially setup
         */
        init?: ((slider: SliderObject) => void) | undefined;
    }

    type HelperActions = "play" | "pause" | "stop" | "next" | "prev" | "previous";
}

interface JQuery {
    flexslider(options?: FlexSlider.Options | FlexSlider.Methods | FlexSlider.HelperActions | number): any;
}
