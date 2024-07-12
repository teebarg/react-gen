import React from "react";
import Meta from "@/components/Meta";
import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { useQueryParams } from "@/hooks/use-query-params";
import { Excel } from "@/components/core/excel-uploader";
import TableData from "./components/TableData";
import beafService from "@/services/beaf.service";

interface Props {}

const beafQuery = ({ name, page }: { name: string; page: string }) => ({
    queryKey: ["beaf", { name, page }],
    queryFn: async () => {
        return await beafService.all({ name, page });
    },
});

const beafLoader =
    (queryClient: any): LoaderFunction =>
    async ({ request }) => {
        const url = new URL(request.url);
        const name = url.searchParams.get("name") ?? "";
        const page = url.searchParams.get("page") ?? "";

        const query = beafQuery({ name, page });
        return queryClient.ensureQueryData(query);
    };

const beaf: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { name } = useQueryParams();
    const { beaf, ...pagination } = useLoaderData() as any;

    return (
        <React.Fragment>
            <Meta title="beaf" />
            <div>
                <div className="max-w-7xl mx-auto p-8">
                    <h1 className="text-2xl font-semibold mb-2">beaf:</h1>
                    <div className="py-4">
                        <Excel />
                    </div>
                    <TableData rows={ beaf } pagination={pagination} query={name} />
                    <Button color="secondary" onClick={() => navigate(-1)} className="mt-6">
                        Back
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

export { beaf, beafLoader };