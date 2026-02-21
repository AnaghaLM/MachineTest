
function Map() {
  return (
    <div className="w-full h-62.5 sm:h-87.5 md:h-112.5 py-5 rounded-xl overflow-hidden" id="map">
      <iframe
        title="location"
        className="w-full h-full border-0"
        src="https://www.google.com/maps?q=Dubai%20Internet%20City&output=embed"
        loading="lazy"
      />
    </div>
  )
}

export default Map