<template>
    <tr>
        <td>
            <div class="px-3 py-1">
                <p class="text-xs font-weight-bold mb-0">
                    <slot name="username"></slot>
                </p>
            </div>
        </td>
        <td>
            <p class="text-xs font-weight-bold mb-0">
                <slot name="email"></slot>
            </p>
        </td>
        <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">
                <slot name="fristname"></slot>
            </p>
        </td>
        <td class="align-middle">
            <span class="badge badge-sm bg-gradient-success">
              <slot name="edit"></slot>
            </span>
        </td>
        <td class="align-middle">
            <slot name="delete"></slot>
        </td>
    </tr>
</template>