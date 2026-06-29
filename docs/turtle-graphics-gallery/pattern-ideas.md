# Turtle Graphics Pattern Ideas

This gallery collects 100 pattern ideas to inspire students to push their Python skills further.
Each pattern is chosen because it teaches a concept — loops, functions, recursion, color math,
or geometry — not just because it looks pretty. Browse the categories, pick something that
catches your eye, and challenge yourself to code it.

---

## Category 1 — Basic Loops and Repetition

### 1. Rainbow Square Spiral

Draw a square, turn slightly, draw a slightly larger square, repeat 36 times.
Each square is a different color cycling through red, orange, yellow, green, blue, and violet.
The result looks like a square tunnel of color spinning into the center.
Teaches: `for` loops, color lists, and how a tiny angle change creates dramatic visual rotation.

### 2. Pinwheel of Triangles

Draw 12 equilateral triangles arranged in a circle, each rotated 30° from the last.
Alternate colors between gold and dark red to create contrast between blades.
Teaches: how to repeat a shape around a center point using a loop and `right(360/n)`.

### 3. Nested Circles

Draw 20 concentric circles starting at radius 10 and growing by 15 pixels each iteration.
Color them with alternating cyan and navy so they appear to pulse outward.
Teaches: `range()` with a step, `circle()`, and how to lift the pen and reposition between circles.

### 4. Starburst

From the center, draw 36 lines of equal length pointing outward, each rotated 10° from the last.
Color each line a shade that shifts from yellow at the top to orange to red at the bottom.
Teaches: computing color index from loop counter, radial symmetry.

### 5. Checkerboard Grid

Draw an 8×8 grid of filled squares alternating black and white like a chessboard.
Use nested `for` loops to iterate rows and columns, computing x/y position mathematically.
Teaches: nested loops, coordinate arithmetic, and `begin_fill()` / `end_fill()`.

### 6. Diagonal Stripe Field

Fill the canvas with 30 parallel diagonal lines, each 5 pixels apart, running from bottom-left to top-right.
Alternate line colors between teal and coral.
Teaches: translating a loop counter into a starting coordinate, pen-up repositioning.

### 7. Dotted Grid

Place a filled circle (dot) at every intersection of a 10×10 grid spaced 40 pixels apart.
Vary dot size based on row number — dots grow larger toward the bottom.
Teaches: nested loops, `dot()`, and mapping a loop variable to a visual property.

### 8. Color Wheel Wedges

Divide the canvas into 12 pie-slice wedges, each filled with one color of the HSL color wheel.
Use `begin_fill()` and `end_fill()` with triangle-style geometry to draw each wedge.
Teaches: dividing 360° into equal parts, how the 12 hues relate to each other.

### 9. Pentagon Chain

Draw 10 pentagons in a horizontal row, each touching the next at one corner.
Fill alternating pentagons with purple and gold.
Teaches: computing the exterior angle of a regular polygon (`360 / sides`), horizontal positioning.

### 10. Overlapping Transparent Squares

Draw 8 large squares offset diagonally by 20 pixels each, with each fill color slightly different.
Since turtle fills are opaque, carefully order the draw sequence so overlaps look intentional.
Teaches: draw order, fill color planning, offset positioning.

---

## Category 2 — Functions and Reuse

### 11. Flower with Petal Function

Write a `petal(size, color)` function that draws one rounded petal using two arcs.
Call it 8 times in a loop, rotating 45° between each call, to assemble a full flower.
Teaches: defining and calling functions with parameters, how small reusable units compose.

### 12. Honeycomb Grid

Write a `hexagon(x, y, size)` function, then call it in a nested loop to tile the canvas with hexagons.
Alternate row offsets by half a hexagon width to create a true honeycomb packing.
Teaches: function parameters, offset grid math, and why hexagons tile perfectly.

### 13. City Skyline

Write `building(x, width, height, color)` to draw one rectangular skyscraper with windows.
Call it 10 times with varied arguments to build a silhouette skyline across the bottom of the canvas.
Teaches: functions with multiple parameters, how to compose a scene from reusable parts.

### 14. Snowflake Arms

Write `arm(length, levels)` to draw one branch of a snowflake (a line with two smaller side branches).
Call it 6 times rotating 60° between calls to form the full six-armed snowflake.
Teaches: decomposing a symmetric shape into one arm plus rotation, function reuse.

### 15. Polka Dot Canvas

Write `dot(x, y, radius, color)` and call it with random positions and random colors 200 times.
Teaches: writing a simple drawing function, using `random.randint()` for placement and color choice.

### 16. Brick Wall

Write `brick(x, y, w, h, color)` to draw one filled rectangle with a thin dark border.
Call it in a nested loop, offsetting alternate rows by half a brick width.
Teaches: the offset row pattern, how a small function hides repetitive drawing detail.

### 17. Stars of Different Sizes

Write `star(x, y, size, color)` that draws a 5-pointed star using the 144° turn method.
Call it 15 times with sizes ranging from 20 to 120 pixels at random positions.
Teaches: parameterized functions, the geometry of a 5-pointed star (144° exterior angle).

### 18. Traffic Light Stack

Write `light(y, color)` to draw one circle in the correct color and position.
Call it three times to assemble a traffic light inside a dark rectangle.
Teaches: decomposing a real-world object into drawing primitives and positioning by function argument.

### 19. Fish School

Write `fish(x, y, size, direction)` that draws a simple fish shape (body ellipse + triangle tail).
Call it 20 times with slightly varied positions and sizes for a school of fish swimming left.
Teaches: how one function with different arguments creates variation, visual storytelling.

### 20. Mountain Range

Write `mountain(x, peak_y, width, color)` that draws a filled triangle.
Layer three calls with progressively lighter blue-grays to suggest foreground, midground, and background peaks.
Teaches: layering draw calls for depth, how color value (dark vs light) signals distance.

---

## Category 3 — Spirals

### 21. Archimedean Square Spiral

Move forward by an increasing distance each step, turning exactly 90° each time.
After 200 steps the turtle traces a tight square spiral expanding outward.
Teaches: how a fixed turn angle plus increasing forward distance creates a spiral without trigonometry.

### 22. Rainbow Line Spiral

Same as #21 but color each segment by cycling through 6 colors.
The rainbow banding makes each revolution visually distinct.
Teaches: how `i % len(colors)` maps a loop counter to a color list index.

### 23. Hexagonal Spiral

Turn 60° instead of 90° for a hexagonal spiral.
Use a blue-to-green gradient to color segments.
Teaches: how the turn angle alone determines the spiral's polygon shape.

### 24. Triangular Spiral

Turn 120° for a triangular spiral.
Color each third of the spiral a different warm color.
Teaches: 120° = equilateral triangle corner, how three-fold symmetry emerges.

### 25. Inward Collapsing Spiral

Start with a large step length and decrease it each iteration until it reaches 1.
The turtle spirals inward to a point at the center.
Teaches: decreasing sequences, the visual effect of convergence.

### 26. Colored Logarithmic Spiral

Use trigonometry (`cos`, `sin`) to position the turtle along a logarithmic spiral curve.
Color each segment by its angle position in the 0–360° cycle.
Teaches: importing `math`, using `goto(x, y)` to draw curves via point-by-point plotting.

### 27. Double Helix Spiral

Draw two interleaved spirals starting 180° apart, one in blue and one in red.
Both expand at the same rate so they never intersect.
Teaches: running two drawing sequences in a single loop, phase offset.

### 28. Fibonacci Spiral

Draw quarter-circle arcs of radii 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 in sequence.
Each arc pivots 90° to follow the Fibonacci rectangle tiling.
Teaches: the Fibonacci sequence, how a mathematical sequence produces a natural-looking curve.

### 29. Spiral of Spirals

Draw 12 small square spirals arranged in a circle, each rotated so it faces outward from the center.
Teaches: composing a macro-shape from repeated micro-shapes, nested loops.

### 30. Color-Banded Pentagon Spiral

Spiral with a 72° turn (pentagon) and change color every 5 steps.
Distinct color bands march outward in diagonal stripes across the spiral arms.
Teaches: how the choice of banding interval interacts with the polygon period.

---

## Category 4 — Fractals and Recursion

### 31. Koch Snowflake

Replace every straight line segment with four segments that form a triangular bump outward.
Repeat this replacement recursively 4 times to get the classic snowflake edge.
Teaches: the core fractal idea — replace a rule with itself at a smaller scale.

### 32. Sierpiński Triangle

Draw a triangle, then recursively draw three half-size triangles at each corner.
Stop at depth 5. Fill the outer triangles and leave the center gaps empty.
Teaches: recursion with a depth limit, how self-similar holes create a fractal.

### 33. Fractal Tree

Draw a trunk, then split into two branches angled ±25°, each 70% of the parent's length.
Recurse until branches are shorter than 5 pixels.
Teaches: binary recursion, the base case, how branching angle and ratio control the tree's look.

### 34. Dragon Curve

Build the Dragon Curve by folding a strip of paper in half repeatedly (in code).
After 12 folds, unfold the sequence of left/right turns and draw them.
Teaches: list manipulation to encode a recursive sequence, then replaying it as turtle moves.

### 35. Hilbert Curve

Implement the Hilbert space-filling curve with a recursive function for each of the four L-system rules.
At depth 5 it fills a square region completely without crossing itself.
Teaches: L-systems, mutual recursion (four functions calling each other).

### 36. Cantor Dust

Draw a horizontal line, then draw two lines at one-third the length on the next level, skipping the middle third.
Repeat 6 levels downward, spacing each level a fixed distance below the previous.
Teaches: the triadic Cantor set, recursion that reduces by a ratio, visual self-similarity.

### 37. Pythagorean Tree

Draw a square, then on the top edge grow two smaller squares rotated to form a right triangle.
Recurse on each new square until size is below 5 pixels.
Color squares from brown (trunk) to green (leaves) by depth.
Teaches: geometric recursion, using depth to drive color transition.

### 38. T-Square Fractal

Draw a square at the center. At each corner, draw a square half the size rotated 45°.
Repeat 5 levels deep. The overlapping squares create a striking geometric weave.
Teaches: corner-anchored recursion, four recursive calls per level.

### 39. Lévy C Curve

Replace each segment with two segments at 45° angles (like an upward bump).
After 12 iterations, the segments pack into a shape resembling a dragon's wing.
Teaches: a different fractal replacement rule, how 45° produces a qualitatively different shape than 60°.

### 40. Gosper Curve (Flowsnake)

Use the Gosper L-system replacement rules to draw a curve that tiles the plane.
After 4 iterations it fills a hexagonal region with a beautiful winding path.
Teaches: L-system string rewriting, translating a character sequence into turtle commands.

### 41. Mandelbrot Pixel Art

For each pixel in a grid, test whether the Mandelbrot iteration escapes.
Color the pixel by how many iterations it took to escape (or black if it never does).
This is slow in Python but teaches complex number arithmetic and iteration.
Teaches: complex numbers, escape-time coloring, nested loops for raster graphics.

### 42. Julia Set Pixel Art

Like the Mandelbrot but with a fixed complex constant c.
Different values of c produce dramatically different filled shapes — some connected, some dust.
Teaches: how changing one parameter transforms the fractal, parameter exploration.

### 43. Sierpiński Carpet

Divide a square into 9 equal sub-squares, remove the center, then recurse on the 8 remaining.
At depth 4, the remaining filled area is a lattice of square holes in holes.
Teaches: 8-way recursion (not 2-way), how area shrinks as 8/9 per level.

### 44. Barnsley Fern

Apply one of four affine transformations chosen randomly at each step, plot the resulting point.
After 50,000 points, a photorealistic fern leaf emerges from pure math.
Teaches: iterated function systems (IFS), probability-weighted random choice, scatter plotting with `dot()`.

### 45. Snowflake Variation — Anti-Koch

Instead of bumping outward, bump inward on every other iteration.
The result alternates between spiky and notched edges as depth increases.
Teaches: alternating rule application, how small rule changes create radically different shapes.

---

## Category 5 — Symmetry and Tiling

### 46. Four-Fold Symmetric Doodle

Record every turtle move in a list. After drawing one quadrant, replay the list
rotated 90°, 180°, and 270° to produce a four-fold symmetric pattern automatically.
Teaches: recording commands as data, replaying with transformation.

### 47. Six-Fold Mandala

Draw one-sixth of a mandala pattern, then stamp it 5 more times rotating 60° each time.
Teaches: how 360/6 = 60° gives six-fold symmetry, function-based mandala construction.

### 48. Mirror Butterfly

Draw the right wing of a butterfly as a freehand curve using `goto()` waypoints.
Mirror it by negating the x coordinates for the left wing.
Teaches: bilateral symmetry via x-negation, using coordinate lists.

### 49. Kaleidoscope Slice

Draw a random angular slice with filled shapes and bright colors.
Rotate and mirror it 12 times to create a 12-section kaleidoscope.
Teaches: combining rotation (30°) and reflection (x-flip) to build radial symmetry.

### 50. Pinwheel Tiling

Tile the canvas with the Penrose pinwheel tiling (triangles split into 5 smaller triangles).
Color triangles based on their orientation angle modulo 5.
Teaches: aperiodic tiling, recursion for tile subdivision.

### 51. Escher-Style Fish Tile

Define a single fish shape using waypoints.
Translate and rotate copies so each fish's head fits into the neighboring fish's tail.
Teaches: how Escher-style tessellations work — each tile is shaped to fit its neighbors.

### 52. Voronoi Color Regions

Place 15 random seed points. For each pixel in a grid, color it based on which seed it is closest to.
Teaches: distance formula, nearest-neighbor classification, pixel-by-pixel raster drawing.

### 53. Truchet Tiles

Fill a grid with tiles each containing either a `/` arc or a `\` arc, chosen randomly.
The arcs connect across tile boundaries to form wandering river-like paths.
Teaches: randomized tiling, how local random choices produce global structure.

### 54. Penrose Rhombus Tiling

Recursively subdivide two types of rhombus (thick and thin) following Penrose deflation rules.
Color thick rhombuses gold and thin ones blue.
Teaches: two-rule recursive subdivision, aperiodic geometry.

### 55. Islamic Geometric Star Pattern

Construct a repeating pattern of 8-pointed stars and cross shapes found in Islamic tile work.
Use only straight lines and 45° angles.
Teaches: exact geometric construction from angle rules, repetition via translation.

---

## Category 6 — Nature and Science

### 56. Sunflower Seed Spiral

Place 500 seeds using the golden angle (≈137.5°) — each seed one golden angle further around.
Distance from center grows as the square root of the seed index.
The seeds automatically arrange into the Fibonacci spiral arms seen in real sunflowers.
Teaches: the golden angle, why Fibonacci numbers appear in nature, `math.sqrt()`.

### 57. Spider Web

Draw 8 radial spokes from the center. Then draw concentric rings connecting the spokes,
spacing them in a logarithmic progression so inner rings are closer together.
Teaches: mixing radial and concentric structure, logarithmic spacing.

### 58. Lightning Bolt

Recursively displace the midpoint of a line segment up or down by a random amount,
then recurse on each half. After 7 levels, the jagged result looks like lightning.
Teaches: midpoint displacement, how randomness combined with recursion creates organic shapes.

### 59. River Delta

Start at the top with one wide line. At each step, randomly split into two thinner branches.
Branches that go off-screen are pruned. The result resembles a river delta or tree root.
Teaches: random branching with pruning, how stochastic recursion differs from deterministic.

### 60. Coral Branch

Use a recursive branching function but allow 1–3 random sub-branches per node (not always 2).
Vary branch angle randomly within ±40°. Color from dark red (base) to pink (tips).
Teaches: variable-arity recursion, random angle variation, color-by-depth gradient.

### 61. Galaxy Spiral Arms

Draw four logarithmic spiral arms offset 90° from each other.
Scatter star dots along each arm and add a bright central core cluster.
Teaches: log spirals, point-scatter around a curve using `random.gauss()` for natural spread.

### 62. Leaf Venation

Draw a central vein, then branch smaller veins off it, then smaller veins off those.
Each vein curves slightly outward from the leaf edge inward.
Teaches: biological branching structure, curved lines via small forward+turn steps.

### 63. DNA Double Helix Side View

Plot two sine waves offset by 180° as point sequences. Connect rungs between them every 10 points.
Color one strand blue and one red.
Teaches: `math.sin()`, parametric plotting, how a phase offset creates the helix appearance.

### 64. Ripple Waves

Draw concentric ellipses centered at three different points.
Where ellipses overlap, the visual interference creates wave interference patterns.
Teaches: multiple centers, how ellipses differ from circles, visual superposition.

### 65. Topographic Map

Draw closed concentric irregular curves (slightly perturbed circles) at increasing radii.
Color bands between contours from green (low) to brown (high) to white (peak).
Teaches: contour coloring, how elevation maps use color bands.

---

## Category 7 — Mathematical Curves

### 66. Lissajous Figure

Plot `x = A·sin(a·t + δ)` and `y = B·sin(b·t)` for t from 0 to 2π using `goto()`.
Try ratios a:b of 1:2, 2:3, 3:4 to see how the ratio controls the loop count.
Teaches: parametric equations, `math.sin()`, how frequency ratio determines curve shape.

### 67. Rose Curve (Rhodonea)

Plot `r = cos(k·θ)` in polar coordinates, converting each point to `(x, y)` for `goto()`.
With k=3 you get 3 petals; k=4 gives 8 petals (the petal count rule is n or 2n depending on k).
Teaches: polar-to-Cartesian conversion, how the parameter k changes petal count.

### 68. Spirograph (Hypotrochoid)

Plot the curve traced by a pen in a small disk rolling inside a larger disk.
Parameters r (inner radius), R (outer radius), and d (pen distance) control the pattern.
Teaches: parametric curves, how three parameters create infinite variety.

### 69. Epitrochoid (Outer Spirograph)

Same as the hypotrochoid but the small disk rolls on the outside of the large disk.
Produces flower-like loops rather than inward curves.
Teaches: comparing inner vs outer rolling, the sign difference in the parametric formula.

### 70. Butterfly Curve (Temple H. Fay)

Plot the trigonometric butterfly curve in polar form.
The curve traces a shape with four wing-like lobes.
Teaches: more complex polar equations, how transcendental functions create organic shapes.

### 71. Superellipse (Lamé Curve)

Plot `|x/a|^n + |y/b|^n = 1` for various values of n.
n=2 is an ellipse; n=4 is a rounded rectangle; n=0.5 produces a star shape.
Teaches: how changing one exponent morphs a shape continuously, parametric families.

### 72. Cassini Oval

Plot the set of points where the product of distances to two fixed foci equals a constant.
When the constant equals the inter-focus distance, the oval becomes a figure-eight (lemniscate).
Teaches: distance formula, how changing one constant creates a topological change.

### 73. Fermat's Spiral

Plot `r = ±√θ` in polar coordinates for θ from 0 to 8π.
Two arms (one for + and one for −) wind outward from the origin symmetrically.
Teaches: square root scaling, how ± creates mirrored arms.

### 74. Epicycloid Star

Plot a point on the rim of a circle rolling around the outside of another circle.
When the ratio of radii is an integer n, you get a star with n points.
Teaches: epicycloids, how an integer ratio creates a closed, star-pointed curve.

### 75. Astroid (Four-Cusped Hypocycloid)

Roll a circle of radius R/4 inside a circle of radius R.
The traced point draws a four-cusped astroid — a shape like a puffy square with pinched corners.
Teaches: hypocycloids, parametric form `x = R·cos³(t)`, `y = R·sin³(t)`.

---

## Category 8 — Optical Illusions and Op Art

### 76. Rotating Squares Illusion

Draw concentric squares, alternating their corner orientation by 5° each level.
The static image appears to spiral or rotate when viewed.
Teaches: how orientation change creates kinetic illusion, the importance of alternating contrast.

### 77. Café Wall Illusion

Draw horizontal rows of black and white rectangles offset by half a unit each row,
with thin gray mortar lines between rows.
The rows appear slanted even though they are perfectly horizontal.
Teaches: the role of context (mortar color) in perceptual illusion, precise grid drawing.

### 78. Mach Bands

Draw a series of filled rectangles in increasing shades of gray.
The human eye perceives dark and light bands at the edges even though each rectangle is uniform.
Teaches: drawing gradient approximations with discrete bands, color value arithmetic.

### 79. Moiré Pattern

Draw two identical sets of closely spaced parallel lines, one slightly rotated from the other.
The interference creates a visible beating pattern of bands.
Teaches: how two regular patterns with slightly different spacing or angle create a third emergent pattern.

### 80. Vasarely Sphere

Draw a grid of circles but shrink and shift them toward the center to create the illusion of a sphere bulging from the canvas.
Teaches: how distorting a regular grid can convey three-dimensional curvature.

### 81. Bridget Riley Waves

Draw 40 horizontal sine waves stacked vertically, each shifted slightly in phase from the one above.
Use high-contrast black and white.
Teaches: `math.sin()` for wave generation, how phase shift creates the flowing op-art motion effect.

### 82. Expanding Hexagons

Draw hexagons that grow from tiny to large radiating outward from the center.
Alternate black and white fill so the pattern pulsates.
Teaches: size-driven repetition, how alternating contrast amplifies the expansion illusion.

### 83. Scintillating Grid

Draw a grid of dark rectangles with lighter intersections.
The eye perceives phantom dark dots flickering at the intersections.
Teaches: precise grid placement, how local contrast drives global perceptual effects.

### 84. Impossible Triangle (Penrose Triangle)

Construct the Penrose triangle using three isometric parallelograms drawn in three shades of gray.
The local joins look valid but the global shape is geometrically impossible.
Teaches: how isometric perspective is constructed, how shading implies depth.

### 85. Concentric Ring Pulsation

Draw rings alternating between a warm and cool hue with decreasing width as they approach the center.
The rings appear to vibrate or pulse due to simultaneous contrast between warm and cool.
Teaches: warm/cool color contrast, concentric ring construction.

---

## Category 9 — Typography and Text Art

### 86. Spiral Text

Print a word or message character by character along a spiral path using `write()`.
Each letter is placed at the current turtle position, which advances along the spiral.
Teaches: using `write()` for text rendering, combining motion with text placement.

### 87. Name in Block Letters

Draw each letter of a name as a turtle drawing composed of line segments.
Build a `letter_H()`, `letter_A()`, etc. function for each needed letter.
Teaches: decomposing complex shapes into line primitives, function-per-character architecture.

### 88. Seven-Segment Display

Simulate a seven-segment LED display for digits 0–9.
Each segment is a filled rectangle; a digit is drawn by turning segments on or off.
Teaches: boolean masking to select which segments to draw, encoding digits as bit patterns.

### 89. Circular Name Badge

Arrange letters of a word around the circumference of a circle using `goto()` and rotation math.
Each letter is rotated to face radially outward.
Teaches: placing text at computed positions, rotating the turtle before writing.

### 90. Binary Tree Name

Encode a name as a binary sequence (ASCII) and draw it as a vertical binary tree,
left branch for 0 and right branch for 1.
Teaches: binary representation of text, visualizing data structures as drawings.

---

## Category 10 — Animation and Interactive

### 91. Bouncing Ball

Move a dot across the screen and reverse its direction when it reaches the canvas edge.
Use `ontimer()` to redraw each frame.
Teaches: velocity variables, boundary collision detection, the animation loop pattern.

### 92. Clock Face

Draw a clock face with hour and minute hands that update each second.
Use `ontimer()` and `time.localtime()` to compute hand angles from the current time.
Teaches: real-time updates, converting time to angles (hour × 30°, minute × 6°).

### 93. Turtle Chase

One turtle chases another. The prey moves in a random walk; the predator always turns toward the prey.
Teaches: two-turtle programs, computing the heading toward a target point using `math.atan2()`.

### 94. Spirograph Drawer

Accept user mouse clicks to set the inner radius, outer radius, and pen offset.
Draw the resulting hypotrochoid each time the user clicks.
Teaches: `onscreenclick()`, interactive parameter input, recomputing a drawing on demand.

### 95. Reaction-Diffusion Pattern

Simulate a simple Gray-Scott reaction-diffusion system on a pixel grid.
At each step, update each cell based on its neighbors. Color by concentration.
Slow but produces organic-looking spots and stripes like animal skin patterns.
Teaches: grid simulation, neighbor-based update rules, how complexity emerges from simple local rules.

---

## Category 11 — Advanced Challenges

### 96. L-System Plant

Implement a general L-system engine: a starting axiom, a set of rewrite rules, and an iteration count.
Apply it to Prusinkiewicz's plant L-systems to grow realistic branching plants.
Teaches: string rewriting, building a general interpreter, the power of generalized rule engines.

### 97. Turtle Maze Generator

Use a recursive backtracker algorithm to generate a perfect maze on a grid.
Draw the walls as turtle line segments.
Teaches: depth-first search, using a stack (or recursion) for maze generation, grid data structures.

### 98. Parametric Surface Projection

Compute 3D points on a parametric surface (sphere, torus, saddle) and project them onto 2D
using a simple orthographic or isometric projection.
Draw the wireframe grid of UV lines.
Teaches: 3D-to-2D projection math, parametric surfaces, wireframe rendering.

### 99. Lindenmayer Snowflake Collection

Implement five different L-system fractals (Koch, Lévy, Gosper, Dragon, Peano) in a single program
with a menu to choose which one to draw.
Teaches: organizing multiple algorithms behind a unified interface, code reuse across related systems.

### 100. Generative Art Loop

Write a program that generates a different abstract composition each run using a controlled random seed.
The user can enter a seed number to reproduce any favorite composition.
Teaches: `random.seed()`, reproducible randomness, the concept of a generative design space.

---

*These 100 patterns range from beginner (categories 1–2) to advanced (categories 9–11).
Start where the challenge feels just slightly beyond your comfort zone — that is where the learning happens.*
