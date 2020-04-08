// Create an immediately invoked functional expression to wrap our code
(function() {
  // Define our constructor
  this.Timeline = function() {
    // Define option defaults
    var defaults = {
      scale: 3,
      labelFormat: "ha",
      periodLength: 60,
      totalPeriods: 24,
    }

    // Create options by extending defaults with the passed in arguments
    this.options = extendDefaults(defaults, arguments[0]);
    // Auto initialise the plugin
    this.init();
  }

  // Public Methods

  Timeline.prototype.init = function() {
    // open code goes here
    const options = this.options;
    /* global moment */
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-timeline]').forEach(tl => {
        const scale = tl.dataset.scale ? tl.dataset.scale : this.options.scale,
          timelineStarts = tl.dataset.starts,
          labelFormat = tl.dataset.periodLabelFormat ? tl.dataset.periodLabelFormat : this.options.labelFormat,
          periodLength = tl.dataset.periodLength ? tl.dataset.periodLength : this.options.periodLength,
          totalPeriods = tl.dataset.totalPeriods ? tl.dataset.totalPeriods : this.options.totalPeriods,
          minsPerRem = periodLength / scale; // mins per 1rem unit

        // check timelinet start date is defined
        if (!timelineStarts) {
          throw Error("You must define a start date for the timeline via the data-starts attribute")
        }

        let time = moment(timelineStarts);



        for (var p = 0; p < totalPeriods; p++) {

          let label = (p === 0 ? "" : time.format(labelFormat)),
            first = (p === 0 ? "first" : ""),
            last = (p === (totalPeriods - 1) ? "last" : "");

          let period = tl.insertAdjacentHTML('beforeend', `<div class="timeline__period ${first} ${last}" style="width:${scale}rem;"><div class="timeline__label">${label}</div></div>`);

          time.add(periodLength, 'm'); // add period duration in mins to running time
        }


        tl.querySelectorAll('[data-event]').forEach(ev => {

          const starts = ev.dataset.starts,
            ends = ev.dataset.ends;

          if (!starts) {
            console.warn("No start time defined for the timeline period via the data-starts attribute. This period was skipped")
          } else if (!ends) {
            console.warn("No end time defined for the timeline period via the data-ends attribute. This period was skipped")
          } else {

            const duration = moment.duration(moment(ends).diff(moment(starts))).asMinutes(),
              offset = moment.duration(moment(starts).diff(moment(timelineStarts))).asMinutes();

            let x = (offset / minsPerRem),
              w = (duration / minsPerRem);

            ev.style.transform = `translateX(${x}rem)`;
            ev.style.width = `${w}rem`;
          }
        })
      });
    });
  }

  // Private Methods

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  // Execute!
  new Timeline();
}());