export const GifItem = ({ title, url }) => {
    return (
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md mb-5 mr-5 overflow-hidden">
          <img className="w-full" src={url} alt={title} />
          <p className="bg-white text-2xl mt-1 pt-1 pr-5 pb-0 pl-5 text-center">{title}</p>
      </div>
    )
}