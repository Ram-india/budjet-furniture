
function BranchList ({branches, activeBranch, onSelect}){
    return(
        <div className="space-y-4">
            {branches.map((branch)=>(
                <div
                key={branch.id}
                onClick={()=> onSelect(branch)}
                className={`
                    cursor-poiner rounded-xl border p-5 transistion
                    ${activeBranch.id === branch.id
                    ?"border-gray-900 bg-gray-50 shadow-sm"
                    :"border-gray-200 hover:border-gray-400" }
                `}
                >
                    <h4 className="font-semibold">{branch.label}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                    {branch.address} </p>
                    {
                        branch.phone && (
                            <p className="text-sm mt-2">{branch.phone}</p>
                        )
                    }
                        

                </div>
            ))}
        </div>
    )
}