import { FunctionEventContext } from '@contentful/node-apps-toolkit';

type ResourcesSearchRequest = {
  type: 'resources.search'
  resourceType: string
  query: string
  limit?: number
  pages?: {
    nextCursor: string
  }
}

type Scalar = string | number | boolean

type ResourcesLookupRequest<L extends Record<string, Scalar | Scalar[]> = Record<string, Scalar | Scalar[]>> = {
  type: 'resources.lookup'
  lookupBy: L
  resourceType: string
  limit?: number
  pages?: {
    nextCursor: string
  }
}

type ResourcesEvent = ResourcesSearchRequest | ResourcesLookupRequest

type ResourcesSearchResponse = {
  items: object[]
  pages?: {
    nextCursor?: string
  }
}
type ResourcesLookupResponse = ResourcesSearchResponse


async function lookupHandler(event: ResourcesLookupRequest): Promise<ResourcesLookupResponse> {
  return {
    items: []
  }
}

async function searchHandler(event: ResourcesSearchRequest): Promise<ResourcesSearchResponse> {
  return {
    items: []
  }
}

export const handler = (event: ResourcesEvent, _context: FunctionEventContext) => {
  if (event.type === 'resources.lookup') {
    return lookupHandler(event);
  }
  if (event.type === 'resources.search') {
    return searchHandler(event);
  }

  throw new Error('Unknown Event');
};
