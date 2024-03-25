import { getMyBookIdeaData } from "@/api/bookApi"

import IdeaItem from "./IdeaItem"

import { useQuery } from "@tanstack/react-query"

interface IdeasProps {
  isbn13: string
}

const Ideas = ({ isbn13 }: IdeasProps) => {
  const { data, refetch } = useQuery({
    queryKey: ["ideas", isbn13],
    queryFn: () => getMyBookIdeaData(isbn13)
  })

  return (
    <ul>
      {data?.map((book) => (
        <IdeaItem key={book.created_at} item={book} refetch={refetch} />
      ))}
    </ul>
  )
}

export default Ideas
