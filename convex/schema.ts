import {defineSchema,defineTable} from 'convex/server';
import {v} from 'convex/values';
import {authTables} from '@convex-dev/auth/server';
export const competitor=v.object({asin:v.string(),title:v.string(),description:v.string(),image:v.string(),link:v.string(),position:v.optional(v.string()),booksRank:v.optional(v.number()),rating:v.optional(v.number()),reviewCount:v.optional(v.number())});
export const position=v.object({id:v.string(),title:v.string(),subtitle:v.string(),reader:v.string(),problem:v.string(),promise:v.string(),difference:v.string(),deliver:v.string(),competitorAsins:v.array(v.string()),uncertainty:v.string()});
export const cover=v.object({id:v.string(),layout:v.number(),title:v.string(),subtitle:v.string(),author:v.string(),status:v.union(v.literal('pending'),v.literal('ready'),v.literal('failed')),storageId:v.optional(v.id('_storage')),exportStorageId:v.optional(v.id('_storage')),error:v.optional(v.string())});
export const readerResearch=v.object({summary:v.string(),sources:v.array(v.object({url:v.string(),title:v.string()})),collectedAt:v.number()});
export const titlePlan=v.object({title:v.string(),subtitle:v.string(),rationale:v.string(),titleRules:v.array(v.string()),coverRules:v.array(v.string()),coverBrief:v.string()});
export const group=v.object({label:v.string(),asins:v.array(v.string())});
export default defineSchema({...authTables,
 projects:defineTable({userId:v.id('users'),topic:v.string(),status:v.union(v.literal('researching'),v.literal('positions'),v.literal('titling'),v.literal('title'),v.literal('generating'),v.literal('covers'),v.literal('failed')),stage:v.string(),competitors:v.array(competitor),positions:v.array(position),selectedPosition:v.optional(v.string()),covers:v.array(cover),selectedCover:v.optional(v.string()),error:v.optional(v.string()),updatedAt:v.number(),mode:v.optional(v.literal('demo')),readerResearch:v.optional(readerResearch),titlePlan:v.optional(titlePlan),overview:v.optional(v.string()),groups:v.optional(v.array(group)),recommendationWhy:v.optional(v.string()),rainCalls:v.optional(v.number()),researchCollectedAt:v.optional(v.number())}).index('by_user',['userId']),
 usage:defineTable({month:v.string(),reservedCents:v.number()}).index('by_month',['month'])
});
