export const ReadonlyInformation = ({ label, value }) => {
  return (
    <p className="flex flex-col">
      <span className="font-normal text-sm">{label}:</span> {value}
    </p>
  )
}
