import { getMyBookIdeaData } from "@/api/bookApi"
import { useQuery } from "@tanstack/react-query"
import IdeaItem from "./IdeaItem"

interface IdeasProps {
  isbn13: string
}

const Ideas = ({ isbn13 }: IdeasProps) => {
  const { data } = useQuery({
    queryKey: ["ideas", isbn13],
    queryFn: () => getMyBookIdeaData(isbn13)
  })

  return (
    <ul>
      {data?.map((book) => (
        <IdeaItem item={book} />
      ))}
    </ul>
  )
}

export default Ideas
