export default {
    install(Vue, opts) {
        const directive = (svgElement, binding) => {
            // Check if options are set:
            const options = opts || {};

            // Throw error when there is no path defined for the SVG file:
            if (!options.path || typeof options.path !== 'string') {
                throw new Error('The path to your vue-svg sprite file is missing!');
            }

            // Throw error when there is no icon name defined:
            if (!binding.value || typeof binding.value !== 'string') {
                throw new Error('The name of the SVG icon is missing!');
            }

            // Construct the final SVG icon name with full path:
            const svgIconPath = `${options.path}#${options.prefix || ''}${binding.value}`;

            // Create the `<use>` element:
            const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');

            // Add the SVG file's full path to the `<use>` element:
            useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', svgIconPath);

            // Add a class to the SVG element, when there is one defined in options:
            if (options.class && typeof options.class === 'string') {
                svgElement.classList.add(options.class);
            }

            // Clear the contents of the SVG element:
            svgElement.innerHTML = '';

            // Add the `<use>` element to the SVG element:
            svgElement.appendChild(useElement);
        };

        Vue.directive('svg', {
            bind: directive,
            update: directive
        });
    }
};
