"use client";

import {useParams, useRouter} from "next/navigation";
import {Plus} from "lucide-react";

import {Heading} from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {APiList} from "@/components/ui/api-list";

import {BillboardColumn, columns} from "./column";

interface BillboardClientProps {
    data: BillboardColumn[]
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Billboard (${data.length})`} description="Manage billboards for your store" />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add new
                </Button>
            </div>
            <Separator />
            <DataTable columns={columns} data={data} searchKey="label"/>
            <Heading title="API" description="API calls for Billboards" />
            <Separator />
            <APiList entityName="billboards" entityIdName="billboardId" />
        </>
    )
}