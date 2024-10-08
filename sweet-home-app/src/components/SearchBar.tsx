'use client'

import { useState } from 'react'
import { Search, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  onSearch: (query: string, type: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchType, setSearchType] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    onSearch(searchQuery, searchType)
  }

  const handleClear = () => {
    setSearchQuery('')
    setSearchType('name')
    onSearch('', 'name')
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className="flex-grow">
          <Label htmlFor="search-input" className="sr-only">Search apartments</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              id="search-input"
              type="text"
              placeholder="Search apartments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="search-type" className="whitespace-nowrap font-medium">
            Search by:
          </Label>
          <Select value={searchType} onValueChange={setSearchType}>
            <SelectTrigger id="search-type" className="w-[140px]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="unitNumber">Unit Number</SelectItem>
              <SelectItem value="project">Project</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Button onClick={handleSearch} className={cn(
            "w-full sm:w-auto",
            "bg-primary text-primary-foreground hover:bg-primary/90",
            "transition-colors duration-200"
          )}>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
          <Button onClick={handleClear} className="w-10 h-10 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
            <XIcon className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  )
}